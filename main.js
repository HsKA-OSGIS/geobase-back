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
    let response = await fetch('http://localhost:8080/geoserver/ogc/features/v1/collections/test_workspace:opendata_bfg_gesamt_gamma/items?f=application%2Fjson&limit=50');
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
var lessthan2 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: 'rgba(255, 255, 255, 1)',
          opacity: 0.6                        
      } ),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 1)',
          width: 1,
        })
  } )
} );

var morethan0 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(237, 248, 177, 1)",
      } ),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 1)',
          width: 1,
        })
  } )
} );

var morethan1 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(199, 233, 180, 1)",
      } ),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 1)',
          width: 1,
        })
  } )
} );

var morethan3 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(127, 205, 187, 1)",
      } ),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 1)',
          width: 1,
        })
  } )
} );

var morethan10 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(65, 182, 196, 1)",
      } ),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 1)',
          width: 1,
        })
  } )
} );

var morethan30 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(29, 145, 192, 1)",
      } ),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 1)',
          width: 1,
        })
  } )
} );

var morethan100 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {
          color: "rgba(34, 94, 168, 1)",
      } ),
      stroke: new Stroke({
          color: 'rgba(0, 0, 0, 1)',
          width: 1,
        })
  } )
} );

var morethan300 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {color: "rgba(12, 44, 132, 1)",} ),
      stroke: new Stroke({
           color: 'rgba(0, 0, 0, 1)',
           width: 1,
        })

  } )
} );

var morethan1000 = new Style( {
  image: new CircleStyle( {
      radius: 5,
      fill: new Fill( {color: "rgba(90, 0, 90, 1)",} ),
      stroke: new Stroke({
           color: 'rgba(0, 0, 0, 1)',
           width: 1,
        })

  } )
} );

// assigning styles to features depending on their value
function radiationStyleFunction(feature) {
var radiationValue = feature.get('value');
if (radiationValue <= 2) {
return [lessthan2];
//} else if (radiationValue >= 0 && radiationValue < 1) {
//return [morethan0];
} else if (radiationValue > 2 && radiationValue < 3) {
return [morethan1];
} else if (radiationValue >= 3 && radiationValue < 10) {
return [morethan3];
} else if (radiationValue >= 10 && radiationValue < 30) {
return [morethan10];
} else if (radiationValue >= 30 && radiationValue < 100) {
return [morethan30];
} else if (radiationValue >= 100 && radiationValue < 300) {
return [morethan100];
} else if (radiationValue >= 300&& radiationValue < 1000) {
  return [morethan300];
} else {
return [morethan1000];
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
