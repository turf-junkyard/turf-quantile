var test = require('tape')
var quantile = require('./')
var fc = require('./geojson/fc.js')

test('quantile', function(t){
  var points = JSON.parse(fs.readFileSync(__dirname+'/testIn/Points3.geojson'))

  var quantiled = quantile(points, 'elevation', [10,30,40,60,80,90,99])

  t.ok(quantiled)
  t.equal(quantiled.length, 7)

  t.end()
})