/*@VinayKhedekar
  Program for extracting file path for requested file from /app directory
*/
var path = require('path');
var extractFilePath = function(url) {
  var filePath;
  var fileName = 'index.html';
  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log('File Name is:' + fileName);
  var filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
};
module.exports = extractFilePath;
