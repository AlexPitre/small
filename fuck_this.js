var serial;
var bg = 0;
var myVoice = new p5.Speech();

var increment = 0;
var sml = ["everything", "is", "awful"];
var md = ["you're doing great though"];
var lg = ["don't hurt your hand", "because you probably don't have insurance"];
var xl = ["fuck", "this", "bullshit"];

var timestamp = 0;
var allOfIt = [sml, md, lg, xl];
var allIndex = 1;
var currentWordArray = sml;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(100, 100);

  serial = new p5.SerialPort(); //object
  serial.open('/dev/cu.usbmodem621'); //opens string to serial port (found in p5.serialcontrol)
  serial.on('data', parseData);
  //serial.on('error', printError);

  background(255);
}

function draw() {
   

  if (millis() - timestamp > 15000) {
    timestamp = millis();
    currentWordArray = allOfIt[allIndex];
    print('bullshit');
    allIndex++;
    increment = 0;
    if (allIndex > allOfIt.length - 1) {
      allIndex = 0;
    }
  }

}

function doList() {
  myVoice.listVoices(); //"debug printer for voice options"?
}



function parseData() { //what do i want to do when i receive data
  var data = serial.readLine();
  // print(data);
  // console.log(data);
  //   if(data.length > 0){
  //     console.log(data);
  //   }else{
  //     console.log('no data');
  // } 


 

  if (data.length > 0) {
    data = int(data);
    //print(data);

    if (data >= 50 && data <= 601) {
      myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
      myVoice.speak(currentWordArray[increment]);
      increment++; // increment
      if (increment > currentWordArray.length - 1) {
        increment = 0;
      }
    }

  }




}
