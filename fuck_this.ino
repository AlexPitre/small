
const int PIEZO_PIN = A0; 

void setup() 
{
  Serial.begin(9600);
}

void loop() 
{
  int piezoADC = analogRead(PIEZO_PIN);
  Serial.println(piezoADC); 
  delay (25);
}
