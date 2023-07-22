function sender(){
  write_sheet();
}

// discord -> gas

class remind{
  constructor() {
    this.id = -1;
    this.date = new Date('2024-01-01T00:00+09:00');
    this.description = 'test';
    this.discord_channel = 537871940581326868;
    this.from = '6mink';
  }
}

function write_sheet() {
  console.log("run");

  let test = new remind();

  // spreadsheetの取得
  let sheet_file = SpreadsheetApp.getActiveSpreadsheet();
  let sheet_table = sheet_file.getActiveSheet();

  //console.log(ss);
  //console.log(sheet);

  let row_len = 5; 
  let cell_alphabet = new Array(row_len);

  for (v in cell_alphabet) {
    
  }


  let atId = sheet_table.getRange('A3');
  atId.setValue(test.id);
  
}
