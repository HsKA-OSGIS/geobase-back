import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([10.4515, 51.1657]),
    zoom: 6
  })
});

async function loadGeoData() {
  try {
    let response = await fetch('http://localhost:8080/geoserver/ogc/features/v1/collections/workspace%3Aopendata_bfg_gesamt_gamma/items?limit=1000&filter-lang=cql-text');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
/*
*/ 
    var vectorSource = new VectorSource({
      features: new GeoJSON({
        featureProjection: 'EPSG:3857',
        dataProjection: 'EPSG:4326'
      }).readFeatures(data)
    });

    var vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    
  //   var lowRadiationStyle = new Style({
  //     image: new CircleStyle({
  //         radius: 5,
  //         fill: new Fill({color: 'green'}),
  //         stroke: new Stroke({color: 'black', width: 1})
  //     })
  // });
  
  // var highRadiationStyle = new Style({
  //     image: new CircleStyle({
  //         radius: 5,
  //         fill: new Fill({color: 'red'}),
  //         stroke: new Stroke({color: 'black', width: 1})
  //     })
  // });
  

//styling of the Point Features by their Value 
      var lessthan008 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {
                  color: 'rgba(47, 214, 26, 0.7)',
                  opacity: 0.6                        
              } ),
              stroke: new Stroke({
                  color: 'rgba(47, 214, 26, 1)',
                  width: 1,
                })
          } )
      } );

      var morethan008 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {
                  color: "rgba(188, 248, 113, 0.7)",
              } ),
              stroke: new Stroke({
                  color: 'rgba(188, 248, 113, 1)',
                  width: 1,
                })
          } )
      } );

      var morethan1 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {
                  color: "rgba(244, 248, 72, 0.7)",
              } ),
              stroke: new Stroke({
                  color: 'rgba(244, 248, 72, 1)',
                  width: 1,
                })
          } )
      } );
      
      var morethan2 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {
                  color: "rgba(212, 195, 6, 0.7)",
              } ),
              stroke: new Stroke({
                  color: 'rgba(212, 195, 6, 1)',
                  width: 1,
                })
          } )
      } );
      
      var morethan3 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {
                  color: "rgba(245, 166, 35, 0.7)",
              } ),
              stroke: new Stroke({
                  color: 'rgba(245, 166, 35, 1)',
                  width: 1,
                })
          } )
      } );

      var morethan4 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {
                  color: "rgba(223, 112, 48, 0.7)",
              } ),
              stroke: new Stroke({
                  color: 'rgba(223, 112, 48, 1)',
                  width: 1,
                })
          } )
      } );
      
      var morethan5 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {
                  color: "rgba(209, 72, 13, 0.7)",
              } ),
              stroke: new Stroke({
                  color: 'rgba(209, 72, 13, 1)',
                  width: 1,
                })
          } )
      } );
      
      var morethan6 = new Style( {
          image: new CircleStyle( {
              radius: 5,
              fill: new Fill( {color: "rgba(208, 2, 27, 0.7)",} ),
              stroke: new Stroke({
                  color: 'rgba(208, 2, 27, 1)',
                  width: 1,
                })

          } )
      } );

  // assigning styles to features depending on their value
  function radiationStyleFunction(feature) {
    var radiationValue = feature.get('value');
    // if ( radiationValue <= 0.08) {
    //     return [lessthan008];
    // } else if(1.0 >= radiationValue > 0.08) {
    //     return[morethan008];
    if(4 >= radiationValue > 0) {
        return[morethan1];
    // } else if(3.0 >= radiationValue > 2.0) {
    //     return[morethan2];
    // } else if(4.0 >= radiationValue > 3.0) {
    //     return[morethan3];
    } else if(6 >= radiationValue > 4) {
        return[morethan4];
    // } else if( 6.0 >= radiationValue > 5.0) {
    //     return[morethan5];
    } else {
        return [morethan6];
    }
  }



  
  // Apply the style function to your vector layer
  vectorLayer.setStyle(radiationStyleFunction);
    map.addLayer(vectorLayer);
    
  } catch (error) {
    console.error('Failed to load GeoData', error);
  }
}

loadGeoData();
