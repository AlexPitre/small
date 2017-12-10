var laNuit;
var serial;

function preload() {
  laNuit = loadSound('marais_mixdown.mp3');
}

function setup() {
  createCanvas(400, 400);

  serial = new p5.SerialPort(); //object
  serial.open('/dev/cu.usbmodem411'); //opens string to serial port (found in p5.serialcontrol)
  serial.on('data', parseData);
  // serial.on('error', printError);

  laNuit.loop();
  laNuit.pause();
}

function draw() {
  background(220);

  // var speed = map(mouseX, 0, width, -50, 50);
  // laNuit.rate(speed);

}

function parseData() { //what do i want to do when i receive data
  var data = serial.readLine();
  // print(data);

  if (data.length > 0) {
    data = int(data);
    print(data);

    if (data < 50) {
      laNuit.pause();
    } else if (data >= 50) {
      if (!laNuit.isPlaying()){
      	laNuit.play();
        var speed = map(data, 30, 500, 0, 50);
      laNuit.rate(speed);
      }
      
   
    }
    
    // else if {
    //     laNuit.connect();
    //   } else if {
    //     laNuit.disconnect();
    //   }

  }
}
