// DESCRIPTION:
// It is possible to have both local and global variables with the same name.
// When you do this, the local variable takes precedence over the global variable.
//
// In this example:
//
// const someVar = "Hat";
//
// function myFun() {
//     const someVar = "Head";
//     return someVar;
// }
// The function myFun will return the string Head because the local version of the variable is present.
//
// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.v
// Setup
// const outerWear = "T-Shirt";
// function myOutfit() {
//     // Only change code below this line
//
//     // Only change code above this line
//     return outerWear;
// }
//
// myOutfit();

// SOLUTION:
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

myOutfit();