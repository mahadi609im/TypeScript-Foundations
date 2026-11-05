//*=== Types ===*//
let myName: string = 'Mahadi';
let myAge: number = 34;
let perfect: boolean = true;

// myName = 34; // Type 'number' is not assignable to type 'string'.

const addFunc = (a: number, b: number): number => {
  return a + b;
};

console.log(addFunc(2, 4));

type StudentTypes = {
  id: number;
  roll: number;
  readonly name: string;
  isActive: boolean;
  className?: string;
};

const student1: StudentTypes = {
  id: 343,
  roll: 34,
  name: 'Mahadi',
  isActive: true,
};

// student1.name = "Maha" //! cannot change bcz readonly

//*=== Array ===*//
const arr: number[] = [34, 43, 34];
const studentNames: string[] = ['Mahadi', 'Milon', 'Hasan'];
const rolls: number[] = [3, 34, 5, 3];

// studentNames.push('Maha', 43); // Argument of type 'number' is not assignable to parameter of type 'string'.

type Menu = 'Burger' | 'Pizza' | 'Chicken Fry';

type Order = {
  name: string;
  items: Menu[];
};

const orderNow: Order = {
  name: 'Maha',
  items: ['Burger', 'Chicken Fry'],
};

//*=== Tuple ===*//
let data: [string, number] = ['Maha', 30];

// Regular tuple: TS allows push() method, modifying the tuple length
data.push(34);

let data2: readonly [string, number] = ['Maha', 30];

// Error: 'push' does not exist because 'readonly' makes the tuple completely immutable
// data2.push(34);

console.log(data); // Output: ['Maha', 30, 34]

//*=== Optional Parameters ===*//
const concatName = (firstName: string, lastName?: string): string => {
  if (!lastName) {
    return firstName;
  }
  return firstName + ' ' + lastName;
};

console.log(concatName('Maha'));

const moodRightNow = (name: string, mood?: string, emoji: string = '😉') => {
  console.log(`${mood ?? 'Okay'} ${name} ${emoji}`);
};

moodRightNow('Maha', 'Right now', '✔️');
moodRightNow('Maha');
moodRightNow('Maha', undefined, '🫰');

//*=== void & default parameters ===*//

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

//*=== Rest parameters ===*//

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

//*=== Type & interface ===*//
type User = {
  name: string;
  age: number;
  salary: number;
  action: () => void;
  address: string[];
};

interface IUser {
  name: string;
  age: number;
  salary: number;
  action: () => void;
  address: string[];
}

const user: User = {
  name: 'Maha',
  age: 20,
  salary: 3434343434,
  action: () => console.log('Alhamdulillah'),
  address: ['Dhaka', 'Bangladesh'],
};

const user2: User = {
  name: 'yahhu',
  age: 15,
  salary: 34343434343,
  action: () => console.log('Alhamdulillah'),
  address: ['Dhaka', 'Bangladesh'],
};

const user3: IUser = {
  name: 'Babuni',
  age: 15,
  salary: 34343434343,
  action: () => console.log('Alhamdulillah'),
  address: ['Dhaka', 'Bangladesh'],
};

//*=== Type alias ===*//

type Status = 'pending' | 'About';
type Identity = string | number;
type Role = 'User' | 'Admin';

const typeStatus: Status = 'About';
const studentIdentity: Identity = 'Maha';
const userRole: Role = 'Admin';
console.log(typeStatus, studentIdentity, userRole);

type Admin = { id: number; role: 'admin'; privileges: string[] };
type Member = { id: number; role: 'member'; plams: string[] };

type Users = Admin | Member;
const users: Users = { id: 34, role: 'admin', privileges: ['34', '34'] };
console.log(users);

//=== Type Assertion ===// -> //! Don't use 'as' anytime

type Status2 = 'pending' | 'approved' | 'rejected';

const userStatus: string = 'pending';
const userStatus2: string = 'Hello world';
const userStatus3: Status2 = 'approved';

const showStatus = (status: Status2) => {
  console.log('Your current application is', status);
};

showStatus(userStatus as Status2); //!as Status ব্যবহার করে আপনি টাইপস্ক্রিপ্টের টাইপ চ্যাকিং বা সিকিউরিটি মেকানিজমকে বাইপাস বা এড়িয়ে যাচ্ছেন।

showStatus(userStatus2 as Status2); //! টাইপস্ক্রিপ্ট কোনো এরর দেবে না, কিন্তু রানটাইমে ভুল ডাটা পাস হবে!

showStatus(userStatus3);

//*=== Non-null Assertion ===*//

interface IConfig {
  port?: number;
}

const config: IConfig = {
  port: 5000,
};

const currentPort: number = config.port!;
const currentPort2: number = config.port as number;

//*=== Const Assertion ===*//

const configaration = {
  port: 3434,
  prefix: '/api/v1',
} as const;

// configaration.port = 34; //! Cannot assign to 'port' bcz it's a read-only proparty

//*=== enum ===*//
enum OrderStatus {
  Pending = 'PENDING',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
}

const showStatus3 = (status: OrderStatus) => {
  console.log(`Your order is ${status}`);
};

showStatus3(OrderStatus.Shipped); // works
// showStatus('SHIPPD');           // error: typo caught

//*=== Keyof Typeof ===*//

const fare = {
  rickshaw: 34,
  cng: 400,
  bus: 25,
  localBus: 15,
  leguna: 20,
  tempo: 30,
  uber: 250,
  pathao: 180,
  train: 120,
  launch: 350,
  bike: 90,
  taxi: 500,
};

type Vehicle = keyof typeof fare;

const getFare = (v: Vehicle) => {
  return fare[v];
};

console.log(getFare('bike'));

//*=== Genaric ===*//

//Example 1
const showData = <T>(value: T[]): T[] => value;

console.log(showData([3, 3]));
console.log(showData(['3', '3']));

const getFirst = <T>(value: T[]): T => {
  return value[0];
};

console.log(getFirst([2, 4, 6, 8, 10]));
console.log(getFirst(['Maha', 'Haha']));

//Example 2
const firstSecond = <A, B>(first: A, second: B): [A, B] => {
  return [first, second];
};

console.log(firstSecond('Maha', 30));
console.log(firstSecond('yes', true));

//Example 3
type Box<T> = { content: T };

const box1: Box<number> = { content: 34 };
const box2: Box<string> = { content: 'Maha' };

// Example 4
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

const vehicle: ApiResponse<string[]> = {
  success: true,
  data: ['Maha', 'age'],
};

const price: ApiResponse<number> = {
  success: true,
  data: 343,
};
