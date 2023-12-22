import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';
import { transform } from 'ol/proj';

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
    let response = await fetch('http://localhost:8080/geoserver/ogc/features/v1/collections/test_workspace%3Aopendata_bfg_gesamt_gamma/items?limit=1000&filter-lang=cql-text');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();

    var vectorSource = new VectorSource({
      features: new GeoJSON({
        featureProjection: 'EPSG:3857',
        dataProjection: 'EPSG:4326'
      }).readFeatures(data)
    });

    var vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({
            color: 'black'
          }),
          stroke: new Stroke({
            color: 'black',
            width: 1
          })
        })
      })
    });

    map.addLayer(vectorLayer);
    
  } catch (error) {
    console.error('Failed to load GeoData', error);
  }
}

loadGeoData();
