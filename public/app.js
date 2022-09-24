 // Exercise 1 
// let inpt = prompt("Enter anything");
// let abc = inpt.toLocaleUpperCase();
// document.write(abc);

// Exercise 2

// let inpt = prompt("Enter anything");
//  let abc  = inpt.slice(0,1).toLocaleUpperCase();
//  let ddd = inpt.slice(1).toLocaleLowerCase();
// // let abc = inpt.toLocaleUpperCase();
// document.write(abc+ddd);

// Exercise 3
// let inpt = prompt("favorite mobile phone model");
// let len = inpt.length;
// document.write(len);

// Exercise 4
// let inpt = prompt("enter anything here");
// let abc  = inpt.slice(-1);
// document.write(abc);

// Exercise 5
// let word = "pakistani";
// let fnd = word.charAt(7);
// document.write(fnd);

// Exercise 6
// let inpt = prompt("enter anything expect variable");

// for(let i=0 ; i<inpt.length ; i++){
//     if(inpt[i] == "@" || inpt[i] == "!"){
//         alert("you have enter special character");
//     }
// }

// Exercise 7
// let word = "The quick brown fox jumps over the lazy dog";

// for(let i =0 ; i < word.length ; i ++){
//     let repeat = word.slice(i,i+3);
//     if(repeat == "the" || repeat == "The"){
//        document.write(i);
//     }
// }

// Exercise 8

// let word = "Pakistani";
// let char = word.charAt(3);
// document.write(char)

// Exercise 8
// let word = "Hyderabad";
// let a = "Islam";

// for(let i = 0 ; i < word.length ; i++){
//     let txt = word.slice(i,i+5);    
//     if( txt == "Hyder"){
//         // alert("hydera found "+i);
//         let rep1 = word.slice(0,i);
//         let rep = a;
//         let rep2 = word.slice(i+6)
//         document.write(rep1+rep+rep2)
//     }
// }

// Exercise 9
// let word = "Ali and Sami are best friends. They play cricket and football together";
// let a = "&";
// for(let i=0 ; i < word.length ;i++){
//     let txt = word.slice(i,i+3);
//     if(txt == "and"){
//         alert("and found " + i);
//         let rep1 = word.slice(0,i);
//         let rep = a;
//         let rep2 = word.slice(i+6);

//         document.write(rep1+rep+rep2 + "<br>");
//     }
// }
// or
// let word = "Ali and Sami are best friends. They play cricket and football together";
// let a  = word.replace(/and/g,"&");
// document.write(a)

// Exercise 10
// 1.
// let num = +prompt("please enter any positive integer");
// document.write(num);
// a = 3.45214 for example;
// let  b = Math.round(num);
// document.write(b);
// let c = Math.floor(num)
// document.write(c);
// let d = Math.ceil(num)
// document.write(d);

// 2.
// let num = +prompt("please enter any negative integer");
// a = num = -2.6778
// let b = Math.round(num);
// document.write(b);
// let c = Math.floor(num);
// document.write(c);
// let d = Math.ceil(num);
// document.write(d);

// Exercise Genereating random number
// 1.
// let abc = Math.random();
// document.write(abc)

// 2.
// let x = Math.floor(Math.random()*2+1 )
// document.write(x)

 
// 3.
// let num = 8;
// let x = Math.floor( Math.random() * 10 + 1 );
    
// if(num =  x ){
//     document.write("Congeatulation you have enter write number");
// }

// Converting string 
// let a = prompt("Enter you weight");
// document.write(typeof a+"<br>");
// document.write(a+"<br>");

// let b = parseInt(a);
// document.write(typeof b+"<br>");
// document.write(b +"<br>");


// let c = parseFloat(a);
// document.write(typeof c +"<br>");
// document.write(c);

// Converting string into number
// 1.
// let num = " 472";
// let a = parseInt(num);
// document.write(typeof a + "<br>");
// document.write( a);

// 2.
// let a = 65432;
// let abc = a.toString();
// document.write(typeof abc); 

//  Controlling the length of decimal
// var percentage = (30/45)*100;
// let a = percentage.toFixed(2)
// document.write(a)

// Funtions start
// 1.
// function date(){
//     let abc = new Date();
//     document.write(abc);
// }
// date();

// 2.
// function name(){
//     let a = prompt("enter your first name");
//     let b = prompt("enter your last name");
//     c = a + b;
//     document.write(c);
// }
// name();

// 3.
// function number(){
//     let num1 = +prompt("enter 1 number");
//     let num2 = +prompt("enter 2 number");
//     let add = num1 + num2;
//     return add;
// }
// let abc = number();
// document.write(abc)

// 4.
// Calculator
// function calculator(){
//     let num1 = +prompt("Enter 1 number");
//     let num2 = +prompt("Enter 2 number");
//     let operator = prompt("Enter operator");

//     if(operator == "+"){
//         alert(num1+num2);
//     }
//     else if(operator == "-"){
//         alert(num1-num2);
//     }
//     else if(operator == "*"){
//         alert(num1*num2);
//     }
//     else if(operator == "/"){
//         alert(num1/num2);
//     }
//     else{
//         alert("enter any number");
//     }
// }
// calculator();

// 5.
// function squares(){
//     let num = +prompt("enter any number for square");
//     let a = num*num;
//     document.write(a);
// }
// squares();

// 6.
// function factorail(){
//     let num = +prompt("Enter any number for factorail");
//     let fact = 1;
    
//     for(let i = 1 ; i <= num ;i++){
//         fact = fact*i; 
//     }
//     document.write(`The factorial of ${num} is ${fact}` );
// }
// factorail();

// 7.
// function counting(){
//     let start = +prompt("enter the start number");
//     let end = +prompt("enter the end number");

//     for(let  i = start ; i <= end  ;i++){
//         document.write(i+"<br>");
//     }
// }
// counting()

// 8.
// let base = +prompt("enter the value of base");
// let perp = +prompt("enter the value of perpendicular");

// function fn1(base,perp){
//     let a = Math.floor(Math.sqrt(base*base + perp*perp))    
//     return a ;
// }
// let abc = fn1(base,perp)
// document.write(abc)

// 9.
// let width = +prompt("enter the widh here")
// let height = +prompt("enter the height here")

// function area(width,height){
//     let A = width * height;
//     return A;
// }
// let abc = area(width,height)
// document.write(abc);

// 
// 
// let a = "haferez"
// let b = a.
// 11

// function capitalfirstletter(str){
//     var word = str.split("  ");

//     for(var i=0 ; i < word.length ;i++ ){
//      var firsttxt = word[i].charAt(0).toLocaleUpperCase()
//      var othertxt  = word[i].slice(1)
//    document.write(firsttxt+othertxt)
// }
// }
//  capitalfirstletter("hafeez is a good boy")


// 12.
// function findlongestword(str){
//     let letters = str.split(' ');

//     let longestwrd = " ";
//     for(var i = 0 ; i < letters.length; i++){

//         if (letters[i].length > longestwrd.length){
//             longestwrd = letters[i];
//         }

//     }
//     return longestwrd
// }
// let output = findlongestword("hafeez is a good booooyo")
// document.write(output)

// // 13.
// function accept2orgument(a,b){
//     let txt = a.slice(i,i+1)  ;
//     let abc = b
//     for(let i=0;i<txt.length;i++){
//         if( txt == abc){
//             alert("we found again"+i)
// }
//     }
// }
// let output = accept2orgument("string",prompt("enter lette here"));
// document.write(output)

// // // 14.
// function calccircumference(rad){
    
//     let pie = 3.14;
//     let circumference = 2*pie*rad;
//     document.write(circumference+"<br>");
// }
// calccircumference(+prompt("enter radius here"));
    
// function areaofcircle(rad){
//     var  pie = 3.14;
//     var area = pie*rad*rad;
//     document.write(area) ;
// }
// areaofcircle()  

//////// for my practcie age calculator
// var mydate = new  Date(prompt("enter your age"))
// var date = new Date()
// let current = mydate.getTime()
// let datee = date.getTime()
// let calculation =  datee - current
// let diff = (calculation)/(1000*60*60*24*365);
// document.write(Math.floor(diff))

// var a = +prompt("enter a ")
// var b = +prompt("enter b ")
// var c = +prompt("enter c ")

// function calculateS(a,b,c){
//     let forS = (a+b+c)/2;
//     return forS
// }
// let output = calculateS(a,b,c)

// function calculatearea(output,a,b,c){
//         let S = output
//     let area = S*(S-a)*(S-b)*(S-c) 
//     return area
// }
// let abc = calculatearea(output,a,b,c)
// document.write(abc)

// 4.
let st1 = +prompt("enter your marks in english ");
let st2 = +prompt("enter your marks in urdu");
let st3 = +prompt("enter your marks in islamiat");

function main(average,percentage){
    average()
    percentage()
}
main()

function average(st1,st2,st3){
    let avg = (st1+st2+st3)/300
   document.write(avg)
}
// let outputa = average(st1,st2,st3)
// document.write(outputa+"<br>")

function percentage(st1,st2,st3){
    let percent  = (st1+st2+st3)/300*100
    document.write(percent)
}
// let outputb = average(st1,st2,st3)
// document.write(outputb)

