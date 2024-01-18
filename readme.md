# Geobase 
A web application for displaying geographic data using the new OGC API Standards, Geoserver and OpenLayers
## Overview
The accomplished project represent the results of the work within the Open Source GIS course during the Winter 2023/2024 semester as part of the Geomatics MSc, run by the [Karlsruhe University of Applied Sciences](https://www.h-ka.de/). The goal of the project was to explore the new features and possibilities offered by the new [OGC API](https://ogcapi.ogc.org/) framework, a new standard based on [OpenAPI](https://www.openapis.org/) which is succeeding the old [OWS](https://www.ogc.org/standards/owc) standard for geo APIs. The back-end was developed using [GeoServer](https://geoserver.org/), the front-end using the [OpenLayers](https://openlayers.org/) framework. Example data was obtained from an OWS service of Radiological Data hosted by the German [Bundesamt fuer Strahlenschutz](https://www.imis.bfs.de/geoportal/) (BfS). The project was built on the existing project done by GoSolutions[GoSolutions](https://github.com/HsKA-OSGIS-archive/GOSolutions/) last Winter Semester(2022). 

##Project files


## Installation 
### Requirements 
Java 
### Back-end: GeoServer
### Front-end: OpenLayers + Vite

This example demonstrates how the `ol` package can be used with [Vite](https://vitejs.dev/).

To get started, run the following (requires Node 14+):

    npx create-ol-app my-app --template vite

Then change into your new `my-app` directory and start a development server (available at http://localhost:5173):

    cd my-app
    npm start

To generate a build ready for production:

    npm run build

Then deploy the contents of the `dist` directory to your server.  You can also run `npm run serve` to serve the results of the `dist` directory for preview.
