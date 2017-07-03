function test_creating_rfx() {
  RFX.createEvent(e);
  RFX.publishRFxEvent(id, vendor, time);
  RFX.receiveRFxEvent(id, vendor, time, snapshot);
  
}


function test_duplicate_id() {
  Logger.log(checkDuplicateId("v21"));
}