turf-quantile
=============
[![build status](https://secure.travis-ci.org/Turfjs/turf-quantile.png)](http://travis-ci.org/Turfjs/turf-quantile)

Takes a set of features, a property name, and a set of percentiles and outputs a quantile array. This can be passed as a break array to the isolines function or the isobands function.

```js
var quantile = require('turf-quantile')
var fs = require('fs')

var propertyName = 'elevation'
var percentiles = [10,30,40,60,80,90,99]

var pts = JSON.parse(fs.readFileSync('/path/to/pts.geojson'))

var quantiles = quantile(pts, propertyName, percentiles, function(err, quantiles){
    
console.log(quantiles) // [ 12, 25, 29, 52, 76, 99, 143 ]
```
