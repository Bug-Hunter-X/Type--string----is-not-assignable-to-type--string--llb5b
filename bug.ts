function greeter(person: string): string {
  return "Hello, "+ person;
}

let user = "Jane User";
console.log(greeter(user)); //This will work perfectly

//But

let user1 = ["Jane", "User"];
console.log(greeter(user1)); //This will give error