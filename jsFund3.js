// Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.
//
// The returned object should have a name property that is set to the value of the name argument that was passed into the function.
// Each returned person object should also have the other properties from JS Fundamentals Part II:
// distance_traveled - set this initially as zero
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “Jay is walking” and increase distance_traveled by 3
// run - have it alert for example “Jay is running” and increase distance_traveled by 10
// crawl - have it alert for example “Jay is crawling” and increase distance_traveled by 1
// Note that in all of the above examples “Jay” is the placeholder for the object’s name property.

// function createPerson(name){
function personConstructor(name){
  var person = {
    name : name,
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
  return console.log(person);
}
// createPerson('Candra')
personConstructor('Candra')
// Running this in your terminal as you create it can be super helpful since we aren’t manipulating the DOM!
//
// Change the function name to “personConstructor”
// We just created a blueprint for creating person objects!
//
// If you have prior exposure to OOP, think about how this “constructor” function is similar to “classes”.
//
// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

function ninjaConstructor(name, cohort) {
  var belts = ['yellow-belt', 'red-belt', 'black-belt']
  var ninja = {}
    ninja.name = name
    ninja.cohort = cohort
    ninja.beltLevel = 0
    ninja.levelUp = function(){
      if (beltLevel < 2){
        ninja.beltLevel += 1;
        ninja.belt = belts[ninja.beltLevel]
      }
      return ninja
    }
    ninja.beltLevel = belts[ninja.beltLevel]
  return console.log(ninja);
}
ninjaConstructor('Candra', 'Oct. 2016');
