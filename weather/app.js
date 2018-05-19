
console.log('start');

var requestExt = require('./requestExt');

var result = requestExt.request('https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia');

result.then((response) => {
     console.log(response);
 }, (error) => {
  console.log('error ' + error);
 });

console.log('end');