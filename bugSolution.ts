function greeter(person: string): string {
  return "Hello, "+ person;
}

let user = "Jane User";
console.log(greeter(user)); //This will work perfectly

//Solution 1: Modify the function to accept a string array
function greeterArray(persons: string[]): string {
  return "Hello, "+ persons.join(" ");
}

let user1 = ["Jane", "User"];
console.log(greeterArray(user1)); //This will work

//Solution 2: Access the first element of the array
console.log(greeter(user1[0])); //This will also work