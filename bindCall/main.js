$(document).ready(function(){
  console.log('I am ready');
})
var custom = {
  name: 'California, Eureka',
  onClick: function(){
    console.log('I have been clicked!');
    console.log(this.name);
  }
}

$('button').click(custom.onClick);
