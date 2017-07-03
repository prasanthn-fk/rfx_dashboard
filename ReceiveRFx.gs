var ReceiveRFx = function(id, vendor, psheet, when, url) { 
  this.id = id;
  this.vendor = vendor;
  this.psheet = psheet;
  this.when = when;
  this.url = url;
  
  this.save = function() {
    getDb().getSheetByName("Receive").appendRow(this.asArray());
  }
  
  this.asArray = function() {
    return [this.id, this.vendor, this.psheet, this.when, this.url]
  }
  
}


function test_ReceiveRFx() {
  new ReceiveRFx("123", "v2@bar.com", "Pricesheet|1", new Date(), "google.com").save();
}