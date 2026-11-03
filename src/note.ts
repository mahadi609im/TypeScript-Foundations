//=== Types ===//
let myName: string = 'Mahadi';
let myAge: number = 34;
let perfect: boolean = true;

// myName = 34; // Type 'number' is not assignable to type 'string'.

const addFunc = (a: number, b: number): number => {
  return a + b;
};

console.log(addFunc(2, 4));

//=== Array ===//
const arr: number[] = [34, 43, 34];
const studentNames: string[] = ['Mahadi', 'Milon', 'Hasan'];
const rolls: number[] = [3, 34, 5, 3];

// studentNames.push('Maha', 43); // Argument of type 'number' is not assignable to parameter of type 'string'.

//=== Tuple ===//
let data: [string, number] = ['Maha', 30];

// Regular tuple: TS allows push() method, modifying the tuple length
data.push(34);

let data2: readonly [string, number] = ['Maha', 30];

// Error: 'push' does not exist because 'readonly' makes the tuple completely immutable
// data2.push(34);

console.log(data); // Output: ['Maha', 30, 34]

//=== Optional Parameters ===//
const concatName = (firstName: string, lastName?: string): string => {
  if (!lastName) {
    return firstName;
  }
  return firstName + ' ' + lastName;
};

console.log(concatName('Maha'));

//=== void & default parameters ===//

// 1. Bad Practice: Default param should not be first
const myFunc = (greeting: string = 'Hello', name?: string): void => {
  console.log(greeting + ' ' + name);
};
myFunc('Hello', 'maha'); // Works only because we passed both values

// 2. Error: 'maha' goes to greeting, so name is missing!
// 'void' = this function returns nothing (no 'return' keyword)
const myFunc2 = (greeting: string = 'Hello', name: string): void => {
  console.log(greeting + ' ' + name);
};
// myFunc2('maha'); // TS Error: Expected 2 arguments, but got 1.

// 3. Best Practice: Put required param first, default last
// 'void' = runs the code, returns no value
const myFunc3 = (name: string, greeting: string = 'Hello'): void => {
  console.log(greeting + ' ' + name);
};
myFunc3('maha'); // Works! Output: Hello maha

//=== Rest parameters ===//

const totalOfSum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 1);
};

console.log(totalOfSum(2, 5));

const loginUser = (
  ...args: [name: string, age: number, isActive: boolean]
): void => {
  const [name, age, isActive] = args;
  console.log(
    `My Name is ${name}, I am ${age} years old and i'm now ${isActive ? 'active' : 'deActive'}`,
  );
};

loginUser('Maha', 34, true);
