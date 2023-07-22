function sender(){
  write_sheet();
}

// discord -> gas

function write_sheet() {
  console.log("hello");

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getActiveSheet();

  let range1 = sheet.getRange('A2');
  range1.setValue('test');
}
