void setup() {
  pinMode(8, OUTPUT);
  pinMode(10,OUTPUT);
}

void loop() {
  digitalWrite(8, HIGH);  
  delay(1000);                       
  digitalWrite(8, LOW);    
  delay(1000);
  
  digitalWrite(10,LOW);
  delay(700);
  digitalWrite(10,HIGH);
  delay(700);
  
  
}