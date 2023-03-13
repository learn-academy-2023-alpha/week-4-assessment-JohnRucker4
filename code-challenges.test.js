// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Create describe statement called removeShuffle with anonymous function
describe("removeShuffle", () => {
// It statement should include a description of logic intent
  it("removes the first item from the array and shuffles the remaining content", () => {
// Create Expect statement that takes removeShuffle and passes the provided variables with .toEqual with colors1 array
    expect(removeShuffle(colors1)).toEqual(
// Use arrayContaining with the first color omitted from the original colors1 array
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    )
// Create Expect statement that takes removeShuffle and passes the provided variables with .toEqual with colors2 array
    expect(removeShuffle(colors2)).toEqual(
// Use arrayContaining with the first color omitted from the original colors2 array
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    )
  })
})
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.152 s

// // b) Create the function that makes the test pass.

// // Use removeShuffle that allows an array to be passed.  Use .slice(1) to remove the first index of the array and start at the second in the return.  We can then use .sort with Math.random that produces a number between 0 and 1.  Subtracting - 0.5 could return a negative float for each element in the array.
const removeShuffle = (array) => {
  return array.slice(1).sort(() => Math.random() - 0.5)
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// Create describe statement called tally with anonymous function
describe("tally", () => {
// It statement should include a description of logic intent
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
// Create Expect statement that takes tally and passes the provided variables with .toEqual with votes1 (11 in favor)
    expect(tally(votes1)).toEqual(11)
// Create Expect statement that takes tally and passes the provided variables with .toEqual with votes2 (31 against)
    expect(tally(votes2)).toEqual(-31)
  })
})

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.161 s, estimated 1 s

// b) Create the function that makes the test pass.

// Use tally and pass an object as the argument.  We can then use the object (parameter and argument) to subtract since the keys in the key:value are the same.
const tally = (object) => object.upVotes - object.downVotes

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
const dataArray3 = ["string", "smelly", "spread", "string", "spread"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// Create describe statement called newArray with anonymous function
describe("newDataArray", () => {
// It statement should include a description of logic intent
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
// Create Expect statement that takes newArray and passes the provided variables with .toEqual (We'll need to make sure that array does not contain duplicate values)
    expect(newDataArray(dataArray1, dataArray2, dataArray3)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined", "smelly", "spread",
    ])
  })
})

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.158 s, estimated 1 s

// b) Create the function that makes the test pass.

// Use newDataArray to pass two arrays as arguments
// const newDataArray = (array1, array2) => {
// // Create combinedArray variable that concatenates the two arrays passed as arguments
//   const combinedArray = array1.concat(array2)
// // Return combindArray using .filter (Pass value, index through anonymous function.  This should return the first index of an element in an array.)
//   return combinedArray.filter((value, index) => {
// // Use combinedArray with .indexOf (Pass through value and make it strictly equal to index.  This should return the values without duplicates.)
//     return combinedArray.indexOf(value) === index
//   })
// }

// STRETCH

// Use newDataArray and pass arrays as a spread operator.  Since the arrays are seperate, we'll need to bring them all together using .flat (combines all of the arrays).  Using Set in Javascript will store values in an object (It won't be an array, however.) We can then pass arrays.flat in the Set using the spread operator
const newDataArray = (...arrays) => [...new Set(arrays.flat())]

// *Feeback request* The Stretch was explained to me but I still don't fully understand it.  More clarification needed, please and thank you!

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.15 s