# Geobase 
A web application for displaying geographic data using the new OGC API Standards, Geoserver and OpenLayers
## Overview
The accomplished project represent the results of the work within the Open Source GIS course during the Winter 2023/2024 semester as part of the Geomatics MSc, run by the [Karlsruhe University of Applied Sciences](https://www.h-ka.de/). The goal of the project was to explore the new features and possibilities offered by the new [OGC API](https://ogcapi.ogc.org/) framework, a new standard based on [OpenAPI](https://www.openapis.org/) which is succeeding the old [OWS](https://www.ogc.org/standards/owc) standard for geo APIs. The back-end was developed using [GeoServer](https://geoserver.org/), the front-end using the [OpenLayers](https://openlayers.org/) framework. Example data was obtained from an OWS service of Radiological Data hosted by the German [Bundesamt fuer Strahlenschutz](https://www.imis.bfs.de/geoportal/) (BfS). The project was built on the existing project done by GoSolutions[GoSolutions](https://github.com/HsKA-OSGIS-archive/GOSolutions/) last Winter Semester(2022). 

## Project Files
--index.html
--style.css
--main.js
--package-lock.json
--package.json
--about_the_project.html
--orginal_data_source.html
--ogc_api_documentation.html
--license_page.html
--github_repository.html
--media
    --geobas_logo.png
    --legend.jpeg
    --licence.png
--vite.config.js

## Installation 
Follow installation instructions as necessary

### Requirements 
-Java
-Geoserver
-OGC API plugin
-Node.js

### Back-end
<b> -GeoServer Installation </b>
1. Documentation for Linux: 
   https://docs.geoserver.org/stable/en/user/installation/linux.html
 
2. Download binary file:
   https://sourceforge.net/projects/geoserver/files/GeoServer/2.24.1/geoserver-2.24.1-bin.zip

3. Create geoserver folder in /usr/share/ directory:
    sudo mkdir /usr/share/geoserver

   If you do not have access /usr/share/ folder, use this command to access root shell:
    sudo -i

4. Go into geoserver path, move and extract geoserver-2.24.1-bin.zip file in that directory:
    cd /usr/share/geoserver
    mv /home/user/Downloads/geoserver-2.24.1-bin.zip /usr/share/geoserver
    unzip geoserver-2.24.1-bin.zip

5. Add an environment variable to save the location of GeoServer by typing the following command:
    echo "export GEOSERVER_HOME=/usr/share/geoserver" >> ~/.profile
    . ~/.profile

6. Make yourself the owner of the geoserver folder. Type the following command in the terminal window, replacing USER_NAME with your own username.
example: sudo chown -R USER_NAME /usr/share/geoserver/
    sudo chown -R user /usr/share/geoserver/
 
7. Go to the /usr/share directory
    cd /usr/share
    
    If you don't have the necessary permissions to access this directory, you may need to use sudo:
    sudo cd /usr/share
 
8. Start GeoServer by changing into the directory geoserver/bin and executing the startup.sh script:
    cd geoserver/bin
    sh startup.sh
 
9. Brower using browser: http://localhost:8080/geoserver/

For starting again Geoserver, you can run the codes from 6 to 9 steps, again.

<b> -OGC API Plug-in in Geoserver </b>
1. 




<b> -Visual Studio Code </b>


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

To be able to run the project on Firefox; after install debugger for firefox, launch.json file in .vscode folder should be edited as:

  {
    "version": "0.2.0",
    "configurations": [
        {
        "name": "Launch localhost",
        "type": "firefox",
        "request": "launch",
        "reAttach": true,
        "url": "http://localhost:5173",
            "pathMappings": [{
            "url": "http://localhost:5173/",
            "path": "${workspaceFolder}/home/user/geobase-back" //Project folder 
            }]
        }
    ]
  }
### Authors

- [Alina Khamzatova](https://github.com/alina-khamzatova)
- [Irem Köz](https://github.com/iremkoz)
- [Tanha Tanjimat](https://github.com/tanhatanjimat)
- [Abubakar Siddique](https://github.com/absmizi)

## Acknowledgements

Bundesamt für Strahlenschutz for use of their [Geoportal](https://www.imis.bfs.de/geoportal/)

- Monitors radiation in Germany
- Provides public geoportal with hourly updated data

## Attributions

- GeoServer is licensed under an [GNU General Public License version 2](https://github.com/geoserver/geoserver/blob/main/LICENSE.md). 
- OpenLayers is licensed under a [BSD 2-Clause "Simplified" License](https://github.com/openlayers/openlayers/blob/main/LICENSE.md).
- BfS data is licensed under the [Ordinance on the determination of the terms of use for the provision of federal geodata (GeoNutzV)](http://www.gesetze-im-internet.de/geonutzv/), as well as [Data License Germany - Attribution - Version 2.0](https://www.govdata.de/dl-de/by-2-0).
