var assert = require('assert')
var RecordStore = require('../recordStore.js')
var Record = require('../record.js')
var Customer = require('../customer.js')


describe('RecordStore', function(){
  var recordStore;
  var record1;
  var record2;
  var customer1;

  beforeEach(function(){
    record1 = new Record("Dave", "Dave's greatest hits", "Disco", 9.99);
    record2 = new Record("kyle", "shite", "filthy grime", 5.99);
    record2 = new Record("lalala", "signing", "punk", 8.99);
    recordStore = new RecordStore("dyle's spinning records", "edinburgh");
    recordStore.add(record1);
    recordStore.add(record2);
  })

  it("should be able to add to inventory", function () {
    assert.strictEqual(recordStore.inventory.length, 2)
  })

  it("should be able to list",function (){
    assert.strictEqual(recordStore.listInventory(), "Album1: Dave's greatest hits, Album2: shite, " )
  })

  it("should update price", function() {
    recordStore.sell("Dave's greatest hits");
    assert.strictEqual(recordStore.balance, 9.99);
  })

  it("should give potential revenue", function(){
    recordStore.sell("Dave's greatest hits")
    assert.strictEqual(recordStore.reportInventoryValue(), 15.98)
    // assert.strictEqual(recordStore.reportBalance, 15.98)
  })

  it("should return array filtered by genre", function(){
    assert.deepEqual(recordStore.genrePrint("Disco"),[record1])

  })

})
