function createRFxEvent(id, name, by, when, vertical) {
  new CreateRFx(id, name, by, when, vertical).save();
}

function publishRFxEvent(id, vendors, when) {
  new PublishRfx(id, vendors, when).save();
}

function receiveRFxEvent(id, vendor, psheet, when, url) {
  new ReceiveRFx(id, vendor, psheet, when, url).save();
}

function checkDuplicateId(id) {
  var existing = SpreadsheetApp.getActive().getSheetByName("Create").getDataRange().getValues().filter(function(x) { return x[0] == id; });
  return existing.length != 0;
}

function getDb() {
  return SpreadsheetApp.openById("1XeIUr3n4xbdp10ZMmpSvuYRhUNYndgI7GiUOQ4r7guY");
}