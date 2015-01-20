var ss = require('simple-statistics');

/**
* Takes a {@link FeatureCollection}, a property name, and a set of percentiles and returns a quantile array.
* @module turf/quantile
* @param {FeatureCollection} input
* @param {string} field
* @param {number} numberOfBreaks
* @return {Array<number>} the number of breaks
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
