# Geobase 
A web application for displaying geographic data using the new OGC API Standards, Geoserver, and OpenLayers
## Overview
<p>
    Our Project is "Exploring <a href="https://ogcapi.ogc.org/">OGC (Open Geospatial Consortium) API</a> with Geoserver and OpenLayers (based on BfS (<a href="https://www.imis.bfs.de/geoportal/">the German Bundesamt fuer Strahlenschutz</a>) radiological OGC services)". <br> <br> The accomplished project represents the results of the work within the Open Source GIS course during the Winter 2023-2024 semester as part of the Geomatics MSc, run by <a href="https://www.h-ka.de/">the Karlsruhe University of Applied Sciences</a> has published on <a href="https://github.com/HsKA-OSGIS/geobase-back">GitHUB</a>. <br> <br> The project as a whole aimed to explore the new features and possibilities offered by the new OGC API framework, a new standard based on OpenAPI which is succeeding the new OGS API standard.<br> <br>
        Example data was obtained from an OWS service of Radiological Data hosted by <a href="https://www.imis.bfs.de/geoportal/">the German Bundesamt fuer Strahlenschutz (BfS)</a>. The project was built on the existing project done by <a href="https://github.com/HsKA-OSGIS-archive/GOSolutions/">GoSolutions</a> last Winter Semester 2022-2023. 

## Project Files

  <li>index.html</li>
  <li>style.css</li>
  <li>main.js</li>
  <li>package-lock.json</li>
  <li>package.json</li>
  <li>about_the_project.html</li>
  <li>orginal_data_source.html</li>
  <li>ogc_api_documentation.html</li>
  <li>license_page.html</li>
  <li>github_repository.html</li>
  <li>media</li>
 <ul>
  <li>geobas_logo.png</li>
  <li>legend.jpeg</li>
  <li>licence.png</li>
  </ul>
   <li>vite.config.js</li>


## Installation 
Follow installation instructions as necessary

## Requirements 

  <li>Java</li>
  <li>Geoserver</li>
  <li>OGC API plugin</li>
  <li>-Node.js</li>

## Back-end
<b> -GeoServer Installation </b>
1. Documentation for Linux: <br>
    <a href="https://docs.geoserver.org/stable/en/user/installation/linux.html">GeoServer Documentation</a>
 
2. Download binary file:<br>
   https://sourceforge.net/projects/geoserver/files/GeoServer/2.24.1/geoserver-2.24.1-bin.zip
   <a href="https://sourceforge.net/projects/geoserver/files/GeoServer/2.24.1/geoserver-2.24.1-bin.zip">Download geoserver-2.24.1-bin.zip</a>

4. Create geoserver folder in /usr/share/ directory:<br>
    <code>sudo mkdir /usr/share/geoserver</code>

   If you do not have access /usr/share/ folder, use this command to access root shell:<br>
    <code>sudo -i</code>

5. Go into geoserver path, move and extract geoserver-2.24.1-bin.zip file in that directory:
    <code>cd /usr/share/geoserver</code> <br>
    <code>mv /home/user/Downloads/geoserver-2.24.1-bin.zip /usr/share/geoserver</code><br>
    <code>unzip geoserver-2.24.1-bin.zip</code><br>

6. Add an environment variable to save the location of GeoServer by typing the following command:
    <code>echo "export GEOSERVER_HOME=/usr/share/geoserver" >> ~/.profile</code> <br>
    <code>. ~/.profile</code> <br>

7. Make yourself the owner of the geoserver folder. Type the following command in the terminal window, replacing USER_NAME with your own username.
example: sudo chown -R USER_NAME /usr/share/geoserver/ <br>
    <code>sudo chown -R user /usr/share/geoserver/</code>
 
9. Go to the /usr/share directory <br>
    <code>cd /usr/share</code>
    
    If you don't have the necessary permissions to access this directory, you may need to use sudo: <br>
    <code>sudo cd /usr/share</code>
 
10. Start GeoServer by changing into the directory geoserver/bin and executing the startup.sh script:
    <code>cd geoserver/bin</code>
    <code>sh startup.sh</code>
 
11. Brower using browser:<br>
    <code>http://localhost:8080/geoserver/</code>

For starting again Geoserver, you can run the codes from 6 to 9 steps, again.

<b> -OGC API Plug-in in Geoserver </b>

1. Download Plug-in:<br>
   <a href="https://build.geoserver.org/geoserver/2.24.x/community-latest/geoserver-2.24-SNAPSHOT-ogcapi-features-plugin.zip">geoserver-2.24-SNAPSHOT-ogcapi-features-plugin.zip</a> <br>
   or download from terminal <br>
   <code> wget <code>https://build.geoserver.org/geoserver/2.24.x/community-latest/geoserver-2.24-SNAPSHOT-ogcapi-features-plugin.zip </code> </code>
   
2. Move the zip file into <code>/usr/share/geoserver/webapps/geoserver/WEB-INF/lib</code> and extract it: <br>
 <code> mv /home/user/Downloads/geoserver-2.24-SNAPSHOT-ogcapi-features-plugin.zip /usr/share/geoserver/webapps/geoserver/WEB-INF/lib </code> <br>
 <code>unzip geoserver-2.24-SNAPSHOT-ogcapi-features-plugin.zip</code><br>
 
3. Restart GeoServer to load the new plug-in by using this command: <br>
  <code>  sudo service geoserver restart </code> 

<b> -Visual Studio Code </b>
To make changes in codes, Visual Studio Code (VS Code) was used.

## Front-end: OpenLayers + Vite

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
<code>
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
</code>
## Authors

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
