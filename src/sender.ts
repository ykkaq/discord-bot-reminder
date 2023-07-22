function doSend(){
  write_sheet();
}

// discord -> gas

interface remind{
  id: number; 
  date: Date;
  description: string;
  discord_channel: number;
  from: string;
}

/*
class remind{
  constructor() {
    this.id = -1;
    this.date = new Date('2024-01-01T00:00+09:00');
    this.description = 'test';
    this.discord_channel = 537871940581326868;
    this.from = '6mink';
  }
}
*/

function write_sheet() {
  console.log("run");

  let test = {
    id: -1,
    date: new Date('2024-01-01T00:00+09:00'),
    description: 'test',
    discord_channel: 537871940581326868,
    _from: 'tester'
  };

  /*
  let test = {} as remind;
  test.id = -1;
  test.date = new Date('2024-01-01T00:00+09:00');
  test.description = 'test';
  test.discord_channel = 537871940581326868;
  test.from = 'tester';
  */

  // spreadsheetの取得
  let sheet_file = SpreadsheetApp.getActiveSpreadsheet();
  let sheet_table = sheet_file.getActiveSheet();

  //console.log(ss);
  //console.log(sheet);

  let row_len = 5; 
  let cell_alphabet = new Array(row_len);

  for (let i = 0; i < row_len;i++) {
    cell_alphabet[i] = 'A' + i;
  }

  console.log(cell_alphabet);
}
