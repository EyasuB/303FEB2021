/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    
        if (obj == 0) {
            return "object has no properties";
        } else if (obj === undefined) {
            return "no object passed";
        } else if (obj === null) {
            return "null argument";
        } else if (obj !== 0) {
            let newArray = [];
            for (let key in obj) {
               
                if (obj[key] > 1) {
                    newArray.push(key);
                } else
                    key
            }
            //console.log(newArray);
            newArray.sort()
            let newsortedArray=newArray.join(".");
            //console.log(newsortedArray);
            return newsortedArray;
    }
    
        }
    

console.log(nameString([]));
console.log(nameString());
console.log(nameString(null));
console.log(nameString({ a: 3}));
console.log(nameString({a:3, c:5,b:6}));

