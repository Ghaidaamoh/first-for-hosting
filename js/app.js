alert ('hello');
console.log('this is from js file ');
var userage = prompt('please enter your name');
 console.log ('user name' + userage);

var user = "ghaidaa";
var age = 23;
var salary = 500 + 150 ;
console.log (salary);

if  (salary == 500)
{
  console.log ('thanks');

}

else if (salary <500)
{
console.log ('cool')
}
else if  (salary > 500)
{
  console.log ('amazing');

}

/*else if  (salary === 500);
{
  console.log ('thanks');

}*/
if (salary ===1000 && user=='ghaidaa')
{
   console.log ('true');
}
else{
  console.log ('false');
}
var numofhost = prompt('please enter your num of host ( 1-5 , 5-10) ');
 while(numofhost !== '1-5'&& numofhost !== '5-10'  )
{ 
  numofhost = prompt('please enter your num of host( 1-5, 5-10) ');
}
var hostnumber= prompt('please enter how many host do you want to reserve ');
for(var i=1 ; i<=hostnumber;i++ )
{
  if (numofhost == '1-5')
 {
   var image = '<img src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hostingadvice.com%2Fhow-to%2Ffree-web-hosting%2F&psig=AOvVaw3AGInYkUvpfKZCmiRdIdYG&ust=1618570377214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDr04eLgPACFQAAAAAdAAAAABAJ" alt= "best host"/>';
   document.write(image);
 }
 else if (numofhost == '5-10' )
 {
   var image2 = '<img src ="img/hosting.jpg" alt= "hosting"/>';
   document.write(image2);
 }
    
}
 