# 01 Node Ecosystem
This repository contains two modules, greet.js. and  arithmetic.js 

The greet.js module contains a greet function that has an airty of one, labeled (name), and the required data type is a string.  The return value is a concatenated string that will say, "Hello, (name).

    greet('Mike');
    //returns:
    Hello, Mike

    greet(77);
    //returns: null

The arithmetic.js module contains a mathObject that contains two methods named add and sub.  Both methods a\have an airty of two and will return null when passed a non interger.  The add method will return the value of a + b and the sub method will will return the value of c - d.

    mathObject.add(1,2);
    //returns: 3

    mathObject.sub(4,3);
    //returns: 1

    mathObject.sub('four','three');
    //returns: null

    
<!-- In your README.md file, describe the exported values of each module defined in your lib directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like. -->