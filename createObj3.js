// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.
// You may have to change some private variables/methods to attributes to make all of the functionality work.
//
// Then make the following additions:
//
// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

class VehicleConstructor{
  constructor(name, wheels, passengers, speed){
    var char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.distance_travelled = 0;
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.vin = createVIN();
    function createVIN(){
      var vin = ''
      for(var i =0; i <= 16; i += 1){
        vin += char[Math.floor(Math.random()*35)]
      }
      return vin;
    }
  }
}
VehicleConstructor.prototype.updateDistanceTravelled = function(){
  this.distance_travelled += this.speed
  return this;
};
VehicleConstructor.prototype.move = function(){
  this.updateDistanceTravelled()
  this.makeNoise()
  return this;
};
//  Each vehicle should have a makeNoise method
VehicleConstructor.prototype.makeNoise = function(){
  console.log(`The horn on the ${this.name} goes beep, beep, beep!`);
  return this;
};
VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_travelled);
  return this;
};
// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.
// VehicleConstructor.prototype.createVIN = function(){
//   var arr = [];
//   function getRandNum(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   for(var i = 0; i <=16; i += 1){
//     var num = getRandNum(0, 9);
//     arr.push(num);
//   }
//   var vin = '';
//   for(var j = 0; j < arr.length; j += 1){
//     vin += arr[j];
//   }
//   this.vin = vin;
//   console.log(vin);
//   return this;
// };
//  Using the constructor, create a Bike
var Bike = new VehicleConstructor('bike', 2, 1, 5);
//  Redefine the Bike’s makeNoise method to print “ring ring!”
console.log(Bike.makeNoise().move().checkMiles());
console.log(Bike.passengers);
// console.log(Bike.move());
// console.log(Bike.checkMiles());
// console.log(Bike.createVIN());

//  Create a Sedan
var Sedan = new VehicleConstructor('sedan', 4, 3, 70);
//  Redefine the Sedan’s makeNoise method to print “Honk Honk!”
console.log(Sedan.makeNoise().move().checkMiles());
console.log(Sedan.wheels);
// console.log(Sedan.move());
// console.log(Sedan.checkMiles());
// console.log(Sedan.createVIN());

//  Using the constructor, create a Bus
var Bus = new VehicleConstructor('bus', 4, 1, 40)
//  Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
Bus.pickUp = function(num){
  if(Bus.passengers < 46){
    Bus.passengers += num;
  }
  else{
    console.log('The bus is full! Please ride the next bus.');
  }
}
console.log(Bus.makeNoise());
console.log(Bus.passengers);
console.log(Bus.pickUp(12));
console.log(Bus.passengers);
console.log(Bus.move().checkMiles());
// console.log(Bus.checkMiles());
// console.log(Bus.createVIN());
