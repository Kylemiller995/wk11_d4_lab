var assert = require('assert')
var Record = require('../record.js')


describe('Record', function(){
  var record1;

  beforeEach(function(){
    record1 = new Record("Dave", "Dave's greatest hits", "Disco", 9.99);
  })

  it("should be able to output record info as string", function () {
    var info = record1.toString()
    assert.strictEqual("Name: Dave, Title: Dave's greatest hits, Genre: Disco, Price: 9.99", info)
  })

})
