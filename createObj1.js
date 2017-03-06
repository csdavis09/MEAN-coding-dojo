// We are going to create our very own constructor. Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:

function VehicleConstructor(name, wheels, passengers){
  vehicle = {}

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  //  Each vehicle should have a makeNoise method
  vehicle.makeNoise = function(){
    console.log(`The horn on the ${vehicle.name} goes beep, beep, beep!`);
  }
  return vehicle;
}

//  Using the constructor, create a Bike
var Bike = VehicleConstructor('bike', 2, 1);
//  Redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function(){
  console.log('ring ring!');
}
console.log(Bike.makeNoise());
console.log(Bike.passengers);

//  Create a Sedan
var Sedan = VehicleConstructor('sedan', 4, 3);
//  Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function(){
  console.log('Honk Honk!');
}
console.log(Sedan.makeNoise());
console.log(Sedan.wheels);

//  Using the constructor, create a Bus
var Bus = VehicleConstructor('bus', 4, 1)
//  Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
Bus.pickUp = function(num){
  if(Bus.passengers < 46){
    Bus.passengers += num;
  }
}
console.log(Bus.makeNoise());
console.log(Bus.passengers);
console.log(Bus.pickUp(12));
console.log(Bus.passengers);
