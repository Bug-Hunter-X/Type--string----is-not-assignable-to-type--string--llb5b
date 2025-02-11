# Type 'string[]' is not assignable to type 'string'
This repository contains a simple TypeScript program that demonstrates a common type error: assigning a string array to a string variable.

The `greeter` function expects a string argument, but the program attempts to pass a string array. This results in a type error.

The solution involves modifying the `greeter` function to accept a string array or changing how the array is used to only pass a string.

## How to reproduce the error
1. Clone the repository
2. Open `bug.ts`
3. Run `tsc bug.ts`
4. Observe the error message

## How to fix the error
1. Open `bugSolution.ts`
2. Run `tsc bugSolution.ts`
3. Observe that there is no error