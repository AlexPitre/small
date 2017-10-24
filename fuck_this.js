var serial;
var bg = 0;
var awful = 1
var great = 2
var hand = 3 
  

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort(); //object
  serial.open('/dev/cu.usbmodem411'); //opens string to serial port (found in p5.serialcontrol)
  serial.on('data', parseData);
  //serial.on('error', printError);
}

function draw() {
  background(bg);
}

function parseData() { //what do i want to do when i receive data
  var data = serial.readLine();
  //console.log(data);
  //   if(data.length > 0){
  //     console.log(data);
  //   }else{
  //     console.log('no data');
  //   } 

  if (data.length > 0) {
    bg = map(data, 0, 1023, 0, 255);
    bg = int(bg);
  }

  if (data.length = awful)
    textAlign(CENTER);
  fill(216, 198, 95, 35);
  textFont('Times New Roman', [120]);
  text("everything is awful");
  
  if (data.length = great)
    textAlign(CENTER);
  fill(216, 198, 95, 35);
  textFont('Times New Roman', [120]);
  text("you're doing great though");
  
   if (data.length = hand)
    textAlign(CENTER);
  fill(216, 198, 95, 35);
  textFont('Times New Roman', [120]);
  text("don't hurt your hand because you probably don't have insurance");
  
}
