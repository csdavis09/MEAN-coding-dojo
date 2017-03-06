function iterArr(arr){
  for(var i=0; i<arr.length; i+=1)
    console.log(arr[i])
}
var a = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
iterArr(a)

a.push(100)
console.log(a)

a = (["hello", "world", "JavaScript is Fun"])
console.log(a)

function minVal(arr){
  for(var i=0; i<arr.length; i+=1){
    if (arr[i] < arr[i+1]) {
      var min = arr[i]
    }
  }
  return console.log(min)
}
var x = [1, 5, 90, 25, -3, 0]
minVal(x)

function avgVal(arr){
  var sum = 0
  for(var i=0; i<arr.length; i+=1){
    sum += arr[i];
  }
  var avg = sum / arr.length
  return console.log(avg)
}
var x = [1, 5, 90, 25, -3, 0]
avgVal(x)
