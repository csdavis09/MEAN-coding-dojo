// Turn the following problems from JS Fundamentals Part I into functions that take variable inputs
//
// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumXY(x,y){
  sum = x
  for(var i=sum; i<=y; i+=1){
    sum += i;
  }
  console.log(sum);
}
sumXY(5,15)
// Write a loop that will go through an array, find the minimum value, and then return it
function minVal(arr){
  for(var i=0; i<arr.length; i+=1){
    if (arr[i] < arr[i+1]) {
      var min = arr[i]
    }
  }
  return console.log(min)
}
var x = [1, -1, 90, 25, -3, 0]
minVal(x)

// Write a loop that will go through an array, find the average of all of the values, and then return it
function avgVal(arr){
  var sum = 0
  for(var i=0; i<arr.length; i+=1){
    sum += arr[i];
  }
  var avg = sum / arr.length
  return console.log(avg)
}
var x = [1, -1, 90, 25, -3, 0]
avgVal(x)
// Rewrite these 3 as anonymous functions assigned to variables.
// 1
 var avgVal = function(arr){
   var sum = 0
   for(var i=0; i<arr.length; i+=1){
     sum += arr[i];
   }
   var avg = sum / arr.length
   return console.log(avg)
 }
 // 2
 var minVal = function(arr){
   for(var i=0; i<arr.length; i+=1){
     if (arr[i] < arr[i+1]) {
       var min = arr[i]
     }
   }
   return console.log(min)
 }
 // 3
 var sumXY = function(x,y){
   sum = x
   for(var i=sum; i<=y; i+=1){
     sum += i;
   }
   console.log(sum);
 }

 // invoke the function from a variable:
 sumXY(0,5);
// Rewrite these as methods of an object

var functionsObj = {
    avgVal : function(arr){
      var sum = 0
      for(var i=0; i<arr.length; i+=1){
        sum += arr[i];
      }
      var avg = sum / arr.length
      return console.log(avg)
    },
    minVal : function(arr){
      for(var i=0; i<arr.length; i+=1){
        if (arr[i] < arr[i+1]) {
          var min = arr[i]
        }
      }
      return console.log(min),
    sumxy : function(x,y){
      sum = x
      for(var i=sum; i<=y; i+=1){
        sum += i;
      }
      console.log(sum);
    }
  }
// invoke the function from the object using dot notation
  var x = [1, -1, 90, 25, -3, 0]
  functionsObj.minVal([x])
// Create a JavaScript object called person with the following properties/methods
// name - set this as your own name
var person = {
  name : 'Candra',
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(say){
    if(say === "I am cool"){
      console.log(`${person.name} says ${say}`);
      alert(`${person.name} says ${say}`);
    }
    else{
      console.log(`${person.name} says, Say Whah?!?!`);
      alert(`${person.name} says, Say Whah?!?!`);
    }
    return person;
  },
  walk : function(){
    console.log(`${person.name} is walking`);
    alert(`${person.name} is walking`)
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running`);
    alert(`${person.name} is running`);
    person.distance_traveled +=10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling`);
    alert(`${person.name} is crawling`);
    person.distance_traveled += 1;
    return person;
  }
}
console.log(person.distance_traveled);
person.say_something('You Rock!').walk().run().crawl()
console.log(person.distance_traveled);
// Properties
// distance_traveled - set this initially as zero
// Methods
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
// What should your methods return?
