 // Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.

var run = function runningLogger(){
  console.log('I am running!')
}

 // Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.

function multiplyByTen(num){
  return num * 10
}
multiplyByTen(5)

 // Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string

 function stringReturnOne(){
   return 'This is one string'
 }

 function stringReturnTwo(){
   return 'This is my second string'
 }

 // Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.

 function caller(param){
   if( typeof(param) === "function"){
    param()
  }
 }
 caller(run) // I went ahead and used one of my pre-existing funtions that did not have a return value.

 // Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.

function myDoubleConsoleLog(param1, param2){
  if(typeof(param1) === 'function' && typeof(param2) === 'function'){
    console.log(param1(), param2());
  }
}
 myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

 // Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(param){
  console.log("starting");
  setTimeout(function(){
    if(typeof(param)==='function'){
      param(stringReturnOne, stringReturnTwo)
    }
  }, 2000)
  console.log('ending?');
  return "interesting"
}
caller2(myDoubleConsoleLog)
