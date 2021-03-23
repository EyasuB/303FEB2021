/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    if (obj.length === 0) {
        return "Object has no properties";
    } else if (obj === undefined) {
        return "No object Passed";
    } else if (obj === null) {
        return "Null argument passed";
    } else if (obj.length != 0) {
        let output = '';
        for (let key in obj) {
            if (obj[key] > 1) {
                output += key
            } else {
                key
            }
            return output;
        
        }
        
    }
}
console.log(nameString({a:3, b:5,c:6}));


