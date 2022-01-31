https://github.com/glenchiridza/assets/readme/convertor.mp4

**NB**: first run the following command: 
# npm install  
        from terminal in project directory
-to install all dependecy packages required 

this will install dependecies used such as these:
-- lite-server -> render any changes made with browser-sync while page is open in browser,
-- typescript tsc -> transcompiler , generates the js from ts code
-- bootstrap --> styling

or to install them individually

npm install --save bootstrap
npm install  lite-serve --save-dev
npm install -g typescript

compile ts to js outDir folder is named dist

# npx tsc -w ,
 to trigger watcher on any changes done in typescript code

execute launch.json to do prelaunch task of converting ts to js before running the app, *** if you change any of the typescript code ***
but if no changes , just start the web app with the following command


# npm run start

and this will triger the lite-server and will open the app in browser


@glenchiridza