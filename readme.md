# Geobase 
A web application for displaying geographic data using the new OGC API Standards, Geoserver and OpenLayers
## Overview
The accomplished project represent the results of the work within the Open Source GIS course during the Winter 2023/2024 semester as part of the Geomatics MSc, run by the [Karlsruhe University of Applied Sciences](https://www.h-ka.de/). The goal of the project was to explore the new features and possibilities offered by the new [OGC API](https://ogcapi.ogc.org/) framework, a new standard based on [OpenAPI](https://www.openapis.org/) which is succeeding the old [OWS](https://www.ogc.org/standards/owc) standard for geo APIs. The back-end was developed using [GeoServer](https://geoserver.org/), the front-end using the [OpenLayers](https://openlayers.org/) framework. Example data was obtained from an OWS service of Radiological Data hosted by the German [Bundesamt fuer Strahlenschutz](https://www.imis.bfs.de/geoportal/) (BfS). The project was built on the existing project done by GoSolutions[GoSolutions](https://github.com/HsKA-OSGIS-archive/GOSolutions/) last Winter Semester(2022). 

## Project files


## Installation 
### Requirements 
Java 11 or 17 environment (JRE)
Node.js 14+
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

## How to use

## Project Documentation 

### Concept
## Further Improvements/How to contribute


### Authors

- [Alina Khamzatova](https://github.com/alina-khamzatova)
- [Irem Köz]()
- [Tanha Tanjimat]()
- [Abubakar Siddique]()

## Acknowledgements

Bundesamt für Strahlenschutz for use of their [Geoportal](https://www.imis.bfs.de/geoportal/)

- Monitors radiation in Germany
- Provides public geoportal with hourly updated data

## Attributions

- GeoServer is licensed under an [GNU General Public License version 2](https://github.com/geoserver/geoserver/blob/main/LICENSE.md). 
- OpenLayers is licensed under a [BSD 2-Clause "Simplified" License](https://github.com/openlayers/openlayers/blob/main/LICENSE.md).
- BfS data is licensed under the [Ordinance on the determination of the terms of use for the provision of federal geodata (GeoNutzV)](http://www.gesetze-im-internet.de/geonutzv/), as well as [Data License Germany - Attribution - Version 2.0](https://www.govdata.de/dl-de/by-2-0).