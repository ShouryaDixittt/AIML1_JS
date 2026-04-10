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

//function
var sayHello=function(){
    alert('Hello World');
}

//array
var numberArray=[1,2,3]  //static memory allocation
var animals= new Array("cat","dog","lion");  //dynamic memory allocation......use of constructor

//object
var person={
    name:'Hello',
    age:'51',
    title:'4th President'
}

const sym1=Symbol(4)
console.log(sym1);

const sym2=Symbol(4)
console.log(sym2);

if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false") // because each symbol has unique indetification
}

var a=100;var b=13; var c=10; var linebreak="<br>";

document.write("a+b+c=");
result=a+b+c;
document.write(result);
document.write(linebreak);

document.write("a + b = "); result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = "); result = a - b;
document.write(result);
document.write(linebreak);

document.write("a / b = "); result = a / b;
document.write(result);
document.write(linebreak);

document.write("a % b = "); result = a % b;
document.write(result);
document.write(linebreak);

var a=10;
var b=20;
var linebreak="<br />";
document.write("(a==b)=>");
result=(a==b);
document.write(result);
document.write(linebreak);

document.write("(a>b)=>");
result=(a>b);
document.write(result);
document.write(linebreak);

document.write("(a!=b)=>");
result=(a!=b);
document.write(result);
document.write(linebreak);

document.write("(a<=b)=>");
result=(a<=b);
document.write(result);
document.write(linebreak);

document.write("(a>=b)=>");
result=(a>=b);
document.write(result);
document.write(linebreak);

document.write("(a===b)=>");
result=(a===b);
document.write(result);
document.write(linebreak);

var x=6;
var y=3;
document.write(x=10 && y>1); // true
document.write("<br/>");

//for loop
var count;
document.write("Starting Loop"+"<br/>");
for(count=0;count<10;count++)
{
    document.write("Current Count:"+count);
    document.write("<br/>");
}
document.write("Loop stopped!");

const person1 = {
    fname:"Ajay",
    lname:"Singh",
    age:25
    };
for (let x in person1){
    console.log("Person details:"+ x +":"+ person1[x])
}

// while loop
var count1=0;
document.write("Starting Loop"+"<br/>");
count1++;
}
document.write("Loop stopped! <br/>");

// if loop
var age=20;
if(age>18)
{
    document.write("<b>You are eligible to cast the vote. </b>");

}
document.write("<br/>");




    


   
