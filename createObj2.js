// We are going to create our very own constructor. Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:

// Have the Vehicle constructor also take in a “speed”
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance traveled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

class VehicleConstructor{
  constructor(name, wheels, passengers, speed){
    var _this = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
      distance_travelled += _this.speed
    }

    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    //  Each vehicle should have a makeNoise method
    this.makeNoise = function(){
      console.log(`The horn on the ${this.name} goes beep, beep, beep!`);
    }
    this.speed = speed;
    this.move = function(){
      updateDistanceTravelled()
      this.makeNoise()
    }
    this.checkMiles = function(){
      console.log(distance_travelled);
    }
  }
}

//  Using the constructor, create a Bike
var Bike = new VehicleConstructor('bike', 2, 1, 5);
//  Redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function(){
  console.log('ring ring!');
}
console.log(Bike.makeNoise());
console.log(Bike.passengers);
console.log(Bike.move());
console.log(Bike.checkMiles());

//  Create a Sedan
var Sedan = new VehicleConstructor('sedan', 4, 3, 70);
//  Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function(){
  console.log('Honk Honk!');
}
console.log(Sedan.makeNoise());
console.log(Sedan.wheels);
console.log(Sedan.move());
console.log(Sedan.checkMiles());

//  Using the constructor, create a Bus
var Bus = new VehicleConstructor('bus', 4, 1, 40)
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
console.log(Bus.move());
console.log(Bus.checkMiles());
