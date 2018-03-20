/*@Vinay Khedekar
  Main program to perform chatterbox functions
  1. Load and display requested files
  2. Handle errors when invalid file is Requested
  3. Return and set MIME content-type for requested file type
 */

var http = require('http');
var fs = require('fs');
var extract = require('./extract');
var wss = require('./websockets-server');
var mime = require('mime');

// Load error page with image when invalid file is requested
var handleError = function(err, res) {
  fs.readFile('app/error.html', function(err, data) {
    res.end(data);
  });
};
var server = http.createServer(function(req, res) {
  console.log('Responding to a request.');
  var filePath = extract(req.url);

  //Use Mime Library to return the content-type for all file types
  var mimeType = mime.getType(filePath);

  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      res.setHeader('Content-Type', mimeType);
      res.end(data);
    }
  });
});
server.listen(3000);
