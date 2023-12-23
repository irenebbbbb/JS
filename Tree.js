//1
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += symbol;
      }
      console.log(row);
    }
  }
  
  drawTriangle(5, '*');
  
  
  
  
  
  //2
  function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
      console.log(symbol.repeat(i));
    }
  }
  
  drawTriangle(5, '*');
  
  
  
  
  
  //3
  for (let p = 1; p <= 5; p++) {
     let row = '';
     for (let k = 1; k <= p; k++) {
        row += '*';
     }
     console.log(row);
  }
  
  
  
  
  
  //4
  for(let i = 1; i <= 5; i++) {
    let str = '*'.repeat(i);
    console.log(str.padStart(5));
  }
  