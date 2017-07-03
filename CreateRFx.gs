var CreateRFx = function(id, name, by, when, vertical) {
  this.id = id;
  this.name = name;
  this.createdBy = by;
  this.when = when;
  this.vertical = vertical;
  
  this.save = function() {
    getDb().getSheetByName("Create").appendRow(this.asArray());
  }
 
  this.asArray = function() {
    return [this.id, this.name, this.createdBy, this.when, this.vertical];
  }
}


function test_rfx() {
  new CreateRFx("123", "v1", "gn", new Date(), "vx").save();
}