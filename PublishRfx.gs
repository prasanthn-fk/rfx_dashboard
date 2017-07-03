var PublishRfx = function(id, vendors, when) {
  this.id = id;
  this.vendors = vendors;
  this.when = when;
  
  this.save = function() {
    var sheet = getDb().getSheetByName("Publish");
    for (var i in this.vendors) {
      sheet.appendRow([this.id, this.vendors[i], this.when]);
    }
  }
  
}


function test_publish_rfx() {
  new PublishRfx("v1", ["v1@f.cm", "v2@g.com"], new Date(2017, 03, 06)).save();
  new PublishRfx("v2", ["v1@f.cm", "v3@g.com"], new Date(2017, 05, 06)).save();
}