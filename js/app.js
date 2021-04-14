alert ('hello');
console.log('this is from js file ');
var user = "ghaidaa";
var age = 23;
var salary = 500 + 150;
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
var userage = prompt('please enter your age');
 console.log ('user age' + userage);

 if (userage <= 20 && userage>=15 )
 {
   var image = '<img src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FHello-Teen-Cake-Topper-Decorations%2Fdp%2FB086KTX3LP&psig=AOvVaw2TrCtfWtsDFLiHFqA-9B9S&ust=1618486294593000&source=images&cd=vfe&ved=2ahUKEwjPwsm20f3vAhX8gv0HHb_MCt0QjRx6BAgAEAc" alt= "teenager"/>';
   document.write(image);
 }
 else if (userage >= 20 && userage <= 60 )
 {
   var image2 = '<img src ="img/adults.jpg" alt= "adults"/>';
   document.write(image2);
 }