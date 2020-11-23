//alert('connected');

// var name = prompt('What is your name?');
// alert('hello, '+ name);

// document.write('<h1>welcome to Js class</h1>');
// document.write('<p>we are <br> learning JS</p>');


// var x="32", y=32, z=x+y;
// document.write(z);

// var name ="Taiwo";
// var age = 37;
// document.write("I am " + name + " and "+ age + " years old"+ "<br>"); 

// document.write(typeof(name));

// var isValid = false;

//  variable for datatype number
// var x = 1;
// alert(x);

//  variable for datatype string
// var name = "mubarak";
// alert(name);

//  variable for datatype boolean
// var y = true;
// var t = false;
// alert(typeof(t));

// var x=2, y=2, z=3;
// alert(x==z);

//  variable for datatype array
// var animal = ["cat", "dog", "cow", "rat"];

//  variable for datatype objects
// var student = {firstName:"Musa", age:50, car:"benz"};

// variable without a value is undefined
// var x;
// alert(typeof(x));

// var y = undefined;
// alert(typeof(y));

// empty value
// var w = "";
// alert(typeof(w));
// null datatype = object
// var student = null;
// alert(typeof(student));

// string method
// length returns the lenght of a string

// var word = "missisippi";
// var x = word.length;
// alert(word.toUpperCase());
// alert(word.slice(4,6));

// slice 
// var fruit = "berry, mango, pear, apple ";
// var x = fruit.substring(19,25);
// alert(x);

// replace();

// var text = "I am learning JS";
// var x = text.replace("learning","writing");
// alert(x);

// trim() method removes whitespaces from both sides of a string

// var x ="                hello        ";
// alert(x.trim().length);
// alert(x.length);

// Array methods
// Array is a special variable which can hold more than one value 
// var animal = ['cat', 'dog', 'cow', 'fish'];
// // alert(animal[1]);
// // document.getElementById('demo').innerHTML = animal[2];
// animal.push('duck');
// animal[5]="elephant";
// alert(animal.sort());

// conditional statements
// if statement
// var x = 5, y=10;

// if (y > x) {
//     alert("y is greater than x");
// }
// prompt();

// var age = prompt("what is your age?");

// if (age < 18) {
//     alert('you are too young to club');
// }
// else {
//     alert('welcome to aso rock club');
// }

// if else if  and else statement
// var time = prompt('what time is it?');
// if (time < 10 ){
//     alert("Good morning");
// }else if(time < 20){
//     alert("Good afternoon");
// }else{
//     alert("good night");
// }

// BMI 
// var h = prompt("Enter your height:");
// var w = prompt("Enter your weight:");
// var bmi = w/(h*h);

// if (bmi < 18.5) {
//     document.write("Your bmi is "+ bmi +" Kg/m <sup>2</sup>"+ " and you are underweight");
// }else if ((bmi >= 18.5) && (bmi <= 24.9)){
//     document.write("Your bmi is "+ bmi +" Kg/m <sup>2</sup>"+ " and you are healthy");
// }else if((bmi >= 25) && (bmi <= 30)){
//     document.write("Your bmi is "+ bmi +" Kg/m <sup>2</sup>"+ " and you are overweight");
// }else{
//     document.write("Your bmi is "+ bmi +" Kg/m <sup>2</sup>"+ " and you are obese");
// }

// var year = prompt("Enter year:");
// if(year.length==4){
//     if (year%4==0){
//         alert("leap year");
//     }else{
//         alert("Not a leap year");
//     }
    
// }else{
//     alert("invalid input");
// }
// $(document).ready(function(){
    
// //   $('.preview-password').prevue();
//     $('.preview-password').prevue({
//         color: 'red',
//         fontSize: 24
//      });
    
// });
    // var name = prompt('Enter your name');
    // alert("hello " + name);
    
    // var day = prompt("Enter a number");
    // if(day==1){
    //     alert("sunday");
    // }else if(day==2){
    //     alert("monday");
    // }else if(day==3){
    //     alert("tuesday");
    // }else if(day==4){
    //     alert("wednesday");
    // }else if(day==5){
    //     alert("thursday");
    // }else if(day==6){
    //     alert("friday");
    // }else if(day==7){
    //     alert("saturday");
    // }else{
    //     alert("public holiday");
    // }

    // var digit = prompt('Enter your number');
    // if(digit%2==0){
    //     alert('Even number');
    // }else{
    //     alert('Odd number');
    // }

//     var year = prompt("Enter a year");
//    if(year.length==4){
//         if(year%4==0){
//             alert("leap year");
//         }else{
//             alert("Not a leap year");
//         }
//    }else{
//        alert("invalid input");
//    }

// var  day = 3;
// switch (day){
// case 1:
// document.write('Monday');
// break;
//  case 2:
// document.write("Tuesday");
// break;
// case 3:
// document.write("Wednesday");
// break;
// default:
// document.write("Another day");
// }

// function weekDay(){

//     var  x = 4;
//     switch (x){
//     case 1:
//     document.write(x);
//     break;
//     case 2:
//     document.write(x+2);
//     break;
//     case 3:
//     document.write(x+5);
//     break;
//     default:
//     document.write(x+8);
//     }

// }

// weekDay();
// weekDay();

// var name = "ehis";
// var age = 8;
// function nameAge(){
//     var name = "ehis";
//     var age = 8;

//     document.write("my name is "+name+ " and I am "+ age+ " years old.");
// }

// nameAge();

// function anotherF(){
//     document.write(age);
// }
// anotherF();

// function sayHello(name) {
//     alert("Hi,  " + name );
//     }
//     sayHello('David');
    // Alerts “Hi, David”


  alert("Welcome to LCI ATM Center");
 var pin =prompt("Kindly enter pin");

 function display(){
    var x = prompt("SELECT AN OPTION \n1. Withdraw \n2. Transfer \n3. Airtime Recharge");
    if(x==1){
            withdraw();
    }else if(x==2){
        transfer();
    }else if(x==3){
        airtime();
    }else{
        alert("invalid option");
        display();
    }
 }
 display();

 function transfer(){
    var bank = prompt("SELECT BANK TYPE\n 1. GTB \n 2. First \n 3. UBA");
    if(bank==1 || bank==2 || bank ==3){
        var accountNumber =prompt("Enter account number");
        amount();

    }else{
        alert("invalid input");
        transfer();
    }
 }

 function amount(){
     var amt = prompt("SELECT AMOUNT \n 1. 1000 \n 2. 2000 \n 3. 5000 \n 4.10000");
     if (amt==1 || amt==2 || amt==3 || amt==4){
         alert("Processing ----");
         alert("Transfer Successful");
         alert("Thank you for banking with us");
     }else{
         alert("invalid input");
         amount();
     }
 }
