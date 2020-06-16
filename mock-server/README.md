# Mock Server
This is a simple mock data server, using Node Express.  To run, do the following:
1. `npm i`
2. `node app.js`

If you want to add new endpoints for sample json files, simply add the desired endpoint to the [app.js](app.js), with a data file under the [./data](data) directory.  The data files should be valid JSON, either with an array of objects, or a single object, whatever is desired.