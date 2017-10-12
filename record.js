var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.toString = function() {
  var info = "Name: " + this.artist + ", Title: " + this.title + ", Genre: "+ this.genre + ", Price: " + this.price
  return info;
  }


module.exports= Record;
