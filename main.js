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


//styling of the Point Features by their Value 
var lessthan008 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: 'rgba(238, 248, 175, 0.7)',
          opacity: 0.6                        
      } ),
      stroke: new Stroke({
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
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
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
        })
  } )
} );

var morethan1 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(203, 233, 179, 0.7)",
      } ),
      stroke: new Stroke({
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
        })
  } )
} );

var morethan2 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(138, 205, 187, 0.7)",
      } ),
      stroke: new Stroke({
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
        })
  } )
} );

var morethan3 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(87, 182, 196, 0.7)",
      } ),
      stroke: new Stroke({
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
        })
  } )
} );

var morethan4 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(57, 146, 193, 0.7)",
      } ),
      stroke: new Stroke({
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
        })
  } )
} );

var morethan5 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(19, 46, 133, 0.7)",
      } ),
      stroke: new Stroke({
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
        })
  } )
} );

var morethan6 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {color: "rgba(85, 2, 91, 0.7)",} ),
      stroke: new Stroke({
          color: 'rgba(140, 140, 140, 0.5)',
          width: 0.5,
        })

  } )
} );

// assigning styles to features depending on their value
function radiationStyleFunction(feature) {
var radiationValue = feature.get('value');
if (radiationValue < 0.8) {
return [lessthan008];
} else if (radiationValue >= 0.8 && radiationValue < 1) {
return [morethan008];
} else if (radiationValue >= 1 && radiationValue < 2) {
return [morethan1];
} else if (radiationValue >= 2 && radiationValue < 3) {
return [morethan2];
} else if (radiationValue >= 3 && radiationValue < 4) {
return [morethan3];
} else if (radiationValue >= 4 && radiationValue < 5) {
return [morethan4];
} else if (radiationValue >= 5 && radiationValue < 6) {
return [morethan5];
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
