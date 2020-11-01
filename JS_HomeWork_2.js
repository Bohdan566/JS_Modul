
// Завдання_1

// let arr = [1, 2, 3, 4, 5];

// console.log(arr);

// Завдання_2

// let arr = ["Bohdan", "Serhiy", "Vasya", "Andriy", "Dimon"];

// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// Завдання_3

// let arr = ["Bohdan", 1994, "Serhiy", 1996, true];

// console.log(arr);

// Завдання_4


// let arr = [];

// arr[0] = "Bohdan";
// arr[1] = 1994;
// arr[2] = "Serhiy";
// arr[3] = 1996;
// arr[4] = "Vasya";
// arr[5] = 1998;

// console.log(arr);

// Завдання_5

// let arr = [];

// arr[0] = "Bohdan";
// arr[1] = 1994;
// arr[2] = "Serhiy";
// arr[3] = 1996;
// arr[4] = "Vasya";
// arr[5] = 1998;
// arr[6] = "Andriy";
// arr[7] = 1990;
// arr[8] = "Dimon";
// arr[9] = 1988;


// for (let index = 0; index < arr.length; index++) {
//     document.write(arr[index] + "<br>");
    
// }

// Завдання_6

// for (let i = 0; i < 10; i++) {
//     document.write("<div>Мене звати Богдан</div>" + [i+1]);  
// }

// Завдання_7

// let i = 1;

// while( i <= 20 ){
//     document.write("<h1>Bohdan</h1>");
//     i++;
// }

// Завдання_8

// let i = 1;
// while( i <= 20 ){
//     document.write("<h1>Bohdan</h1>" + i );
//     i++;
// }

// Завдання_9

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for( let i = 0; i < 10; i++ ) {
//     console.log(arr[i]);
// }l

// Завдання_10

// let arr = ["Bohdan", "Katya", "Serhiy", "Bohdanna", "Vasya", "Olena", "Andriy", "Danna", "Dimon", "Ira"];

// for(let i = 0; i < 10; i++){
//     console.log([i+1] + "." + arr[i]);
// }

// Завдання_11

// let arr = [];

// arr[0] = "Bohdan";
// arr[1] = 1994;
// arr[2] = "Serhiy";
// arr[3] = 1996;
// arr[4] = "Vasya";
// arr[5] = 1998;
// arr[6] = "Andriy";
// arr[7] = 1990;
// arr[8] = "Dimon";
// arr[9] = 1988;

// for(let i = 0; i < 10; i++){
//     console.log(arr[i]);
// }

// Завдання_12

// let arr = [];

// arr[0] = "Bohdan";
// arr[1] = 1994;
// arr[2] =true;
// arr[3] = "Serhiy";
// arr[4] = 1996;
// arr[5] = false;
// arr[6] = "Vasya";
// arr[7] = 1998;
// arr[8] = true;
// arr[9] = "Andriy";
// arr[10] = 1990;

// for( let i = 0; i < arr.length; i++){
//     if(typeof(arr[i]) == "boolean") {
//         console.log(arr[i]);
//     }
// }

// Завдання_13

// let arr = [];

// arr[0] = "Bohdan";
// arr[1] = 1994;
// arr[2] =true;
// arr[3] = "Serhiy";
// arr[4] = 1996;
// arr[5] = false;
// arr[6] = "Vasya";
// arr[7] = 1998;
// arr[8] = true;
// arr[9] = "Andriy";
// arr[10] = 1990;

// for( let i = 0; i < arr.length; i++){
//     if(typeof(arr[i]) == "number") {
//         console.log(arr[i]);
//     }
// }

// Завдання_14

// let arr = [];

// arr[0] = "Bohdan";
// arr[1] = 1994;
// arr[2] =true;
// arr[3] = "Serhiy";
// arr[4] = 1996;
// arr[5] = false;
// arr[6] = "Vasya";
// arr[7] = 1998;
// arr[8] = true;
// arr[9] = "Andriy";
// arr[10] = 1990;

// for( let i = 0; i < arr.length; i++){
//     if(typeof(arr[i]) === "string") {
//         console.log(arr[i]);
//     }
// }

// Завдання_15

// let arr = [];

// arr[0] = "Bohdan";
// arr[1] = 1994;
// arr[2] =true;
// arr[3] = "Serhiy";
// arr[4] = 1996;
// arr[5] = false;
// arr[6] = "Vasya";
// arr[7] = 1998;
// arr[8] = true;
// arr[9] = "Andriy";
// arr[10] = 1990;


// for( let i of arr){
//     console.log(i);
// }

// Завдання_16

// for( let i = 0; i < 10; i++){
//     console.log(i + 1);
//     document.write(i + 1 + "<br>");
// }

// Завдання_17

// for( let i = 0; i < 100; i++){
//     console.log(i + 1);
//     document.write(i + 1 + "<br>");
// }


// Завдання_18

// for( let i = 0; i < 100; i += 2){
//     document.write(i + "<br>");
//     console.log(i);
//  }

// Завдання_19

// for(let i = 0; i < 100; i++){
//     if(i %2 == 0){
//         console.log(i);
//         document.write(i + "<br>");
//     }
// }

// Завдання_20

// for(let i = 0; i < 100; i++){
//     if(i %2 == 1){
//         console.log(i);
//         document.write(i + "<br>");
//     }
// }

// Завдання_21

// for(let i = 00; i <= 02; i++){
    
//     for(let k = 00; k < 60; k++){
//         console.log(i + " " + k);
//         document.write(i + " " + k + "<br>");
//         if(i == 2 && k == 0){
//             break
//         }
//     }

// }

// Завдання_22
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let i;
// let j;
// let k;


// for( i = 0; i < 3; i++){
//     for( j = 0; j < 60; j++){

//         for( k = 0; k < 60; k++){

//             console.log(i + " hours " + j + " minutes " + k + " seconds");
//             document.write(i + " hours " + j + " minutes "+ k + " seconds" +"<br>");
//         }
//         if( i == 2 && j == 20){
//             console.log(i + " hours " + j + " minutes " + k + " seconds");
//             document.write(i + " hours " + j + " minutes "+ k + " seconds" +"<br>");
            
//             break
//         }
//     }
// }

// Завдання_23


// let arr = ["a", "b", "c"];

// for( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     document.write(arr[i]);
// }

// Завдання_24

// let arr = ["a", "b", "c"];

// let i = 0;

// while( i < arr.length ){
//     document.write(arr[i])
//     console.log(arr[i]);
//     i++
// }

// Завдання_25

// let arr = ["a", "b", "c"];

// for( let i of arr){
//     console.log(i);
//     document.write(i);
// }