var ss = require('simple-statistics');

/**
* Takes a {@link FeatureCollection}, a property name, and a set of percentiles and returns a quantile array.
* @module turf/quantile
* @param {FeatureCollection} input a FeatureCollection of any type
* @param {String} field the property on which to retrieve quantile values
* @param {Array<number>} percentiles an Array of percentiles on which to calculate quantile values
* @return {Array<number>} an array of the break values
* @example
* var points = turf.featurecollection([
*   turf.point(5,5, {population: 200}),
*   turf.point(1,3, {population: 600}),
*   turf.point(14,2, {population: 100}),
*   turf.point(13,1, {population: 200}),
*   turf.point(19,7, {population: 300})]);
* var breaks = turf.quantile(points, 'population', 2);
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
