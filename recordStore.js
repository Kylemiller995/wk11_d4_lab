var RecordStore = function (name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.add = function (record) {
  this.inventory.push(record)
};

RecordStore.prototype.listInventory = function () {
  var list = ""
  var counter = 1
  this.inventory.forEach(function(record){
    list += ("Album" + counter + ": " + record.title + ", ")
    counter ++
  })
  return list
}

RecordStore.prototype.sell = function (recordtoselltitle) {
  function findbytitle(element){
    return element.title === recordtoselltitle
  }
  var item = this.inventory.find(findbytitle)
  return this.balance += item.price;
}

RecordStore.prototype.reportInventoryValue = function () {
  var total = this.inventory.reduce( function (sum, element) {
    return sum + element.price;
  }, 0)
  return total;
}

RecordStore.prototype.genrePrint = function (genreToFind) {
  var invByGenre = this.inventory.filter(function(album){
    return album.genre === genreToFind
  })
  return invByGenre;
}

module.exports = RecordStore;
