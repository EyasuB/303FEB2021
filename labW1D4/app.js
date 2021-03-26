/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
/** */
function removeEvenCharacters(string) {

    let mystring='';
	if(string === undefined){
		return "missing argument";
	} else if(typeof string !=='string'){
		return "argument not string";
	}
    for (let i = 0; i < string.length; i++) {
        if (i % 2 !== 0) {
            mystring+=string[i];
	}
    }
    return mystring;
    console.log(mystring);
}
console.log(removeEvenCharacters());

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!

	function sumPositiveNumbers(array) {
    // let sum = 0;
    // for (let element of array) {
    //     if (element > 0) {
    //         sum += element;
    //     }
    // }
    // return sum;
return array.filter((item)=>item>0).reduce((accumulator, currentValue)=>accumulator+currentValue,0);
}
console.log(sumPositiveNumbers([-1, 4, 5, -6, 10]));


// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
    let temparr =[]; // My container array
    for (let element of array) {
		
    
	 if(typeof element!=='number'){
		temparr.push(element);
	} else {
		temparr.push(Math.abs(element));
	}
		}
   
    
    return temparr;
}
console.log(makePositive([-1, 3,'a', 4, -5]));

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	for (let i = 0; i <array.length-1; i++) {
    if (array[i] == 0) {
        array.splice(i, 1);
        //josharray[i] = '*';
    }
	
}
for (let i = 0; i < array.length;i++) {
    if (array[i] === 0) {
        array[i] = '*';
    }
}
return array;
}
console.log(removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]))


