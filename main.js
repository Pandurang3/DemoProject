console.log("hello");  

// var myVar = 10;
// myVar--;
// console.log(myVar);

// var a = 10;
// var b = 20;
// var c = 15;
// a /= 2;
// console.log(a);

// var myStr = "FirstLine\tSecondLine";
// console.log(myStr);

// var ourStr = "I come first. " + " i come second.";
// console.log(ourStr);

// var ourStr2 = "I come first. " ;
// ourStr2 += "i come second";
// console.log(ourStr2);

// var myNameTxt = "My name is ";
// var myName = "Javascript " + myNameTxt +" ";
// var fullName = myNameTxt + myName;
// console.log(fullName);
// console.log(myName);

// var firstLetterOfFirstName = "";
// var firstName = "Ada";

// firstLetterOfFirstName = firstName[firstName.length - 1];
// console.log(firstLetterOfFirstName);

// var firstLetterOfLastName = "";
// var lastName = "Lovelace";

// firstLetterOfLastName =  lastName[lastName.length - 1];
// console.log(firstLetterOfLastName);


// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//     var result = "";
//     result += "the " + myNoun + " " +myAdjective  + " " +myVerb + " to the store " + myAdverb;
//     return result;  
// }

// console.log(wordBlanks("dog","big","ran","quickly"));
// console.log(wordBlanks("bike","slow","flew","slowly"));

// var ourArray = ["john", 23];
// console.log(ourArray);

// var myArry = ["ABCD","EFGH",20];
// console.log(myArry[1]);

// var ourArray = [ ["First Array", 1], ["Second Array",2] ];
// console.log(ourArray[1][1]);

// var ourArray = [18,64,99];
// ourArray.push([50,"hi"]);
// console.log(ourArray);
// ourArray.pop();
// ourArray.pop();
// console.log(ourArray);

// var myArry = [ ["john", 23], ["cat", 2] ];
// console.log(myArry);
// var removeFromMYArray = myArry.pop();
// console.log(myArry);

// var array = [ ["John", 23], ["Dog", 3] ];
// array.shift("hi");
// console.table(array);

// var array2 = ["Hi","Bye","GoodBye"];
// console.log(array2);
// array2.unshift("goodMorning");
// console.log(array2);


// function helloWorld(a , b){
//     console.log(a - b);
// }
// helloWorld(5,5);

// var myGlobal = 10;

// function fun1(){
//     oopsGlobal = 5;
// }

// function fun2(){
//     var output = "";
//     if(typeof myGlobal != "undefined"){
//         output += "myGlobal: " + myGlobal + "\n";
//     }
//     if(typeof oopsGlobal != "undefined"){
//         output += "oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();


// myVar = 10;
// function myLocalScope(){
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();
// console.log(myVar);


// var outerWear = "T-Shirt";
// function myOutfit(){
//     return outerWear;
// }
// console.log(myOutfit());


// function test(a,b){
//     return  a + b;
// }
// console.log(test(2,2));


// function nextInLine(arr, item){
//     arr.push(item);
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5];
// console.log(testArr);
// console.log( "Before: " + JSON.stringify(testArr) );
// console.log( nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// function shortcut(name1,name2){
//     nameOne = name1.charAt(0);
//     nameTwo = name2.charAt(0);
//     console.log(nameOne+nameTwo);
//     }
//     shortcut('Amnesty','International');

//     function firstChar(name){
//         trim = name.trim();
//         console.log(trim);
//         char = trim.charAt(0);
//         console.log(char);
//     }
//     firstChar(' Rosa Parks ');

    // function secondIndexOf(s1, s2) {
    //     let firstIndex = s1.indexOf(s2);
    //     console.log( s1.indexOf(s2, firstIndex + 1));
    // }
    // secondIndexOf('White Rabbit', 'i');

    // function trueOrFalse(wasThatTrue){
    //     if(wasThatTrue){
    //         return "yes, that was true";
    //     }
    //     return "No that was False";
    // }

    // console.log(trueOrFalse(true));

// function testEqual(val){
//     if (val === 12){
//         return "equal";
//     }
//     return "not equal";
// }
// console.log(testEqual("12"));

// function orderMyLogic(val){
//     if(val < 5){
//         return "Less then 5";
//     } else if (val < 10){
//         return "Less then 10";
//     } else {
//         return "Greater then or equal to 10";
//     }
// }
// console.log(orderMyLogic(1));



// var ourArry = [];

// for (var i = 0; i < 5; i++) {
//     ourArry.push(i);
// }

// console.log(ourArry);

// var myArray = [];

// for (i = 0; i <= 10; i++) {
//     myArray.push(i);
// }

// console.log(myArray);


// var myArray = [];
// for(var i = 1; i < 10; i ++ ){
//     myArray.push(i + " " + "For Loop" );
// }

// var i = 0;
// while(i<5){
// myArray.push(i + " " + "while Loop" );
// i++;

// }

// console.log(myArray);

// var ourArray = [];

// for(var i = 10; i > 0; i -= 2){
//     ourArray.push(i);
// }

// console.log(ourArray);

// var myArr = [10, 20, 30, 40];
// var totalArr = 0;

// for (i = 0; i < myArr.length; i++){
//     totalArr += myArr[i];
// }

// console.log(totalArr);

// function multilyAll(arr) {
//     var product = 1;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++){
//             product *= arr[i][j];
//         }
//     }

//     return product;
// }

// var product = multilyAll( [ [1,2],[3,4],[5,6,7] ] );

// console.log(product);

// var myArray = [];
// var i = 10;

// do{
//     myArray.push(i);
//     i++;
// }while(i < 20)

// console.log(i , myArray);

 // function randomNumber() {
 //    return Math.floor(Math.random() *10);
 // }

 // console.log(randomNumber());

 // function convertToInteger(str) {
 //    return parseInt( str );
 // }
 // convertToInteger("56");
 // console.log(convertToInteger());
 // 

// function checkEqual(a,b){
//     if(a == b){
//         return true;
//     }
//     else{
//         return false;
//     }
// } 

// var check = checkEqual(5,6);
// console.log(check);
// function checkEqual (num){
//     // return a == b ? true : false;
//     return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
// }
// var check = checkEqual(0);
// console.log(check);

// let a = "Apple";
// let a = "ball";
// console.log(a);

// function Check(){
//     "use strict";

//     let a = "cat";
//     let b = "Dog";

//     console.log(a , b);
// }

// console.log(Check());

