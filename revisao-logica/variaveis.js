// Variables

// var -> (ES5, cross-browser) global level scope
var var1 = "test"; // 'test' | `test`
var var2 = 2;
var var3 = 5.0;
var var4 = []; // [2, 4, 5, 6] | [4, "test", 2.0, 13.4] | ["test1", "test2", "test3"]
var var5 = function() { return 2; };
var var6 = () => { return 5; };

/*
// Possible, can overwrite previous declared variables
var var1 = "test1";
var var1 = 10;
*//*
// Possible, can change the value of previous declared variables
var var1 = "test1";
var1 = 10;
*//*
// Possible, can declare empty variables
var var1;
*/

// ----------------------------------------------------------------------------------
// let -> (ES2015) block level scope
let let1 = "test"; // 'test' | `test`
let let2 = 2;
let let3 = 5.0;
let let4 = []; // [2, 4, 5, 6] | [4, "test", 2.0, 13.4] | ["test1", "test2", "test3"]
let let5 = function() { return 2; };
let let6 = () => { return 5; };

/*
// Not possible, can't overwrite previous declared variables
let let1 = "test1";
let let1 = 10;
*//*
// Possible, can change the value of previous declared variables
let let1 = "test1";
let1 = 10;
*//*
// Possible, can declare empty variables
let let1;
*/


// ----------------------------------------------------------------------------------
// const -> (ES2015) block level scope
const const1 = "test"; // 'test' | `test`
const const2 = 2;
const const3 = 5.0;
const const4 = []; // [2, 4, 5, 6] | [4, "test", 2.0, 13.4] | ["test1", "test2", "test3"]
const const5 = function() { return 2; };
const const6 = () => { return 5; };

/*
// Not possible, can't overwrite previous declared variables
const const1 = "test1";
const const1 = 10;
*//*
// Not possible, can't change the value of previous declared variables
const const1 = "test1";
const1 = 10;
*//*
// Not possible, can't declare empty variables
const const1;
*/