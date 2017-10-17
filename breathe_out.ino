
int sensorRead = 0; // A0 read

int lightSensor = 0; // value of output

int breatheIn = 19; // value of when light is on


void setup() {

Serial.begin(9600); 

pinMode(11, OUTPUT); 

}

void loop() {

lightSensor = analogRead(sensorRead);

Serial.println(lightSensor); //prints photoresistor value

delay(100); 

if (lightSensor < breatheIn) // if sensor value is less than 19, light will turn on.
{ digitalWrite(11, HIGH); //LED on 
} 
else { digitalWrite(11, LOW); // LED off 
}

}
