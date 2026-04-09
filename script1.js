// console.log("Hello World");
document.write('This is my first JavaScript Page');

var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="Hello";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));

// //function
// var sayHello=function(){
//     alert('Hello World');
// }

// //array
// var numberArray=[1,2,3]  //static memory allocation
// var animals= new Array("cat","dog","lion");  //dynamic memory allocation......use of constructor

// //object
// var person={
//     name:'Hello',
//     age:'51',
//     title:'4th President'
// }

// const sym1=Symbol(4)
// console.log(sym1);

// const sym2=Symbol(4)
// console.log(sym2);

// if(sym1==sym2){
//     console.log("true");
// }
// else{
//     console.log("false") // because each symbol has unique indetification
// }

// var a=100;var b=13; var c=10; var linebreak="<br>";

// document.write("a+b+c=");
// result=a+b+c;
// document.write(result);
// document.write(linebreak);

// document.write("a + b = "); result = a + b;
// document.write(result);
// document.write(linebreak);

// document.write("a - b = "); result = a - b;
// document.write(result);
// document.write(linebreak);

// document.write("a / b = "); result = a / b;
// document.write(result);
// document.write(linebreak);

// document.write("a % b = "); result = a % b;
// document.write(result);
// document.write(linebreak);

// var a=10;
// var b=20;
// var linebreak="<br />";
// document.write("(a==b)=>");
// result=(a==b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>b)=>");
// result=(a>b);
// document.write(result);
// document.write(linebreak);

// document.write("(a!=b)=>");
// result=(a!=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<=b)=>");
// result=(a<=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>=b)=>");
// result=(a>=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a===b)=>");
// result=(a===b);
// document.write(result);
// document.write(linebreak);

// var x=6;
// var y=3;
// document.write(x=10 && y>1); // true
// document.write("<br/>");

// //for loop
// var count;
// document.write("Starting Loop"+"<br/>");
// for(count=0;count<10;count++)
// {
//     document.write("Current Count:"+count);
//     document.write("<br/>");
// }
// document.write("Loop stopped!");

// const person1 = {
//     fname:"Ajay",
//     lname:"Singh",
//     age:25
//     };
// for (let x in person1){
//     console.log("Person details:"+ x +":"+ person1[x])
// }

// // while loop
// var count1=0;
// document.write("Starting Loop"+"<br/>");

// while(count1<10)
// {
//     document.write("Current Count:"+count1+"<br/>");
// count1++;
// }
// document.write("Loop stopped! <br/>");

// // if loop
// var age=20;
// if(age>18)
// {
//     document.write("<b>You are eligible to cast the vote. </b>");

// }
// document.write("<br/>");

// // if else loop 
// var age1=20;
// if(age1>=18)
// {
//     document.write("<b>You are an adult. </b>");
// }
// else{
//      document.write("<b>You are a minor. </b>");
// }
//  document.write("<br/>");
// // switch case

// var grade='A';
// document.write("Entering switch block <br/>");
// switch(grade){
//     case 'A':
//         document.write("Good job<br/>");
//         break;
//     case 'B':
//         document.write("Pretty <br/>");
//         break;
//     case 'C':
//         document.write("Passed<br/>");
//         break;
//     case 'D':
//         document.write("Not so good <br/>");
//         break;
//     case 'F':
//             document.write("Failed <br/>");
//          break;
//     default:
//         document.write("Unknown Grade <br/>");
// }
// document.write("Exiting switch block");
//  document.write("<br/>");

//  //function returning a value
// var res=mul(12,30);
// function mul(x,y)
// {
//     return x*y;
// }
// document.write(res);
//  document.write("<br/>");

//  //arrow function
// var add2=(a,b)=>
// {
//     console.log(a+b);
// };
// add2(102,20);

// //arrow function for single line parameters
// var add3=(a,b)=>console.log(a+b);
// add3(30,20);

// //object
// var pers=
// {
//     name:"John",
//     age:30,
//     isMarried:true,
//     address:{
//         street:'Vinay nagar',
//         flatNo:201
//     }
// };
// for (let x in pers){
//     console.log("Person is married: " + pers["isMarried"])
// }

// var pers2= new Object();
//     pers2.name='Krishna';   //to add properties to this object
//     pers2.age=32;
//     pers2.isMarried=true;
//     pers2.address={};    //declare first
//     pers2.address.street='nagar road';  //then initialise
//     pers2['address']['flatNo']=33;
//     console.log(pers2)

//     var myinfo=new Array();
//     var myinfo1=Array();
//     console.log(myinfo,myinfo1);     //same creation in js with or without new keyword

//     let collection=[
//         {},      //function
//         [],         //object
//         true,
//         "john",
//         function () {},
//         9000989193,
//         undefined,
//         null,
//         new String("abc"),    //object
//         new Date(),
//     ];
//     console.log(collection);
//     collection.teacherName="John Mac";
//     collection.phoneNo=9500008193;
//     // length of array does not change 
//     // since it is not inserted it is increased property wise

//     var trainerinfo=["Jitendra",29,"Ghaziabad",{isMarried:true}];
//     console.log(trainerinfo);

//     console.log(trainerinfo[trainerinfo.length-1]);

//     console.log(trainerinfo[trainerinfo.length]);
//     trainerinfo.contact=9971660499;
//     console.log(trainerinfo);

//     const result=document.getElementById("para");   //unique so only 1 element
//     result.innerHTML="my self";
//     result.title="myname";
//     console.log(result);

//   const result2=document.getElementsByClassName("heading");
//   result2.innerHTML="hii";

//  const result3=document.getElementsByTagName("p");
//  result3[2].innerHTML="this is a pet";
//  result3[1].style.color="blue";
//  result3[1].innerText="my paragraph";

//  const test=document.querySelector("ul li:nth-child(3)");
//  test.style.backgroundColor="green";
//  test.style.padding="10px";

//  const text2=document.querySelectorAll("ul li");

//  const element=document.getElementById("myH1");
//  let text=element.getAttribute("class");
//  document.getElementById("demo").innerHTML=text;

//  function myFunction()
//  {
//  document.getElementById("myH2").setAttribute("class","democlass");
//  }

//  const heading=document.createElement("h2");
//  const bodytag=document.getElementByTagName("body"); //element not elements
//  bodytag[0].append();
//  heading.innerText="hello";
//  heading.style.backgroundColor="red";
// //node.prepend() node.append   (inside)
// // node.before()      node.after()       (outside)

// //node.remove()   removes the node

// function practice()
// {
//     document.open();
//     document.write("<h1>PRACTICE</h1>");
//     document.close();
// }

//mouse events
// click onclick
// function onMouseOver(){
//    console.log("On Mouse Over");
// }
// function onMouseOut()
// {
//    console.log("On Mouse Out");
// }
// function onMouseDown()
// {
//    console.log("On Mouse Down");
// }
// function onMouseUp()
// {
//    console.log("On Mouse Up");
// }

// function onMouseMove()
// {
//    console.log("On Mouse Move");
// }

//keyboard events           onkeydown onkeyUp onkeypress
//form events                onfocus onsubmit onblur onchange  
// addEventListener

// const x=document.querySelector("input");
//      x.addEventListener('focus',onhandlefocus);
//      x.addEventListener('blur',onhandleblur);

//      function  onhandlefocus(){
//             x.style.background="red";
//          }
//     function onhandleblur()
//     {
//         x.style.background="red";
//     }

    


   


        

         