// DESCRIPTION:
// The less than operator (<) compares the values of two numbers.
// If the number to the left is less than the number to the right, it returns true.
// Otherwise, it returns false. Like the equality operator,
// the less than operator converts data types while comparing.
//
// Examples
//
//      2   < 5 // true
//      '3' < 7 // true
//      5   < 5 // false
//      3   < 2 // false
//      '8' < 4 // false
// Add the less than operator to the indicated lines so that the return statements make sense.
// function testLessThan(val) {
//     if (val) {  // Change this line
//         return "Under 25";
//     }
//
//     if (val) {  // Change this line
//         return "Under 55";
//     }
//
//     return "55 or Over";
// }
//
// testLessThan(10);
// SOLUTION:
function testLessThan(val) {
    if (val < 25) return "Under 25";

    if (val < 55) return "Under 55";

    return "55 or Over";
}