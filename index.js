var ss = require('simple-statistics');

/**
* Takes a {@link FeatureCollection}, a property name, and a set of percentiles and returns a quantile array.
* @module turf/quantile
* @param {FeatureCollection} input a FeatureCollection of any type
* @param {String} field the property in `input` from which to retrieve quantile values
* @param {Array<number>} percentiles an Array of percentiles on which to calculate quantile values
* @return {Array<number>} an array of the break values
* @example
* var points = turf.featurecollection([
*   turf.point([5,5], {population: 5}),
*   turf.point([1,3], {population: 40}),
*   turf.point([14,2], {population: 80}),
*   turf.point([13,1], {population: 90}),
*   turf.point([19,7], {population: 100})
* ]);
*
* var breaks = turf.quantile(
*   points, 'population', [25, 50, 75, 99]);
*
* //=breaks
*/
module.exports = function(fc, field, percentiles){
  var vals = [];
  var quantiles = [];

  fc.features.forEach(function(feature){
    vals.push(feature.properties[field]);
  });
  percentiles.forEach(function(percentile){
    quantiles.push(ss.quantile(vals, percentile * 0.01));
  });
  return quantiles;
};
