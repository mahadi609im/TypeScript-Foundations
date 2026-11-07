//*=== Types ===*//
let myName = 'Mahadi';
let myAge = 34;
let perfect = true;
// myName = 34; // Type 'number' is not assignable to type 'string'.
const addFunc = (a, b) => {
    return a + b;
};
console.log(addFunc(2, 4));
const student1 = {
    id: 343,
    roll: 34,
    name: 'Mahadi',
    isActive: true,
};
// student1.name = "Maha" //! cannot change bcz readonly
//*=== Array ===*//
const arr = [34, 43, 34];
const studentNames = ['Mahadi', 'Milon', 'Hasan'];
const rolls = [3, 34, 5, 3];
const orderNow = {
    name: 'Maha',
    items: ['Burger', 'Chicken Fry'],
};
//*=== Tuple ===*//
let data = ['Maha', 30];
// Regular tuple: TS allows push() method, modifying the tuple length
data.push(34);
let data2 = ['Maha', 30];
// Error: 'push' does not exist because 'readonly' makes the tuple completely immutable
// data2.push(34);
console.log(data); // Output: ['Maha', 30, 34]
//*=== Optional Parameters ===*//
const concatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + ' ' + lastName;
};
console.log(concatName('Maha'));
const moodRightNow = (name, mood, emoji = '😉') => {
    console.log(`${mood ?? 'Okay'} ${name} ${emoji}`);
};
moodRightNow('Maha', 'Right now', '✔️');
moodRightNow('Maha');
moodRightNow('Maha', undefined, '🫰');
//*=== void & default parameters ===*//
// 1. Bad Practice: Default param should not be first
const myFunc = (greeting = 'Hello', name) => {
    console.log(greeting + ' ' + name);
};
myFunc('Hello', 'maha'); // Works only because we passed both values
// 2. Error: 'maha' goes to greeting, so name is missing!
// 'void' = this function returns nothing (no 'return' keyword)
const myFunc2 = (greeting = 'Hello', name) => {
    console.log(greeting + ' ' + name);
};
// myFunc2('maha'); // TS Error: Expected 2 arguments, but got 1.
// 3. Best Practice: Put required param first, default last
// 'void' = runs the code, returns no value
const myFunc3 = (name, greeting = 'Hello') => {
    console.log(greeting + ' ' + name);
};
myFunc3('maha'); // Works! Output: Hello maha
//*=== Rest parameters ===*//
const totalOfSum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 1);
};
console.log(totalOfSum(2, 5));
const loginUser = (...args) => {
    const [name, age, isActive] = args;
    console.log(`My Name is ${name}, I am ${age} years old and i'm now ${isActive ? 'active' : 'deActive'}`);
};
loginUser('Maha', 34, true);
const user = {
    name: 'Maha',
    age: 20,
    salary: 3434343434,
    action: () => console.log('Alhamdulillah'),
    address: ['Dhaka', 'Bangladesh'],
};
const user2 = {
    name: 'yahhu',
    age: 15,
    salary: 34343434343,
    action: () => console.log('Alhamdulillah'),
    address: ['Dhaka', 'Bangladesh'],
};
const user3 = {
    name: 'Babuni',
    age: 15,
    salary: 34343434343,
    action: () => console.log('Alhamdulillah'),
    address: ['Dhaka', 'Bangladesh'],
};
const typeStatus = 'About';
const studentIdentity = 'Maha';
const userRole = 'Admin';
console.log(typeStatus, studentIdentity, userRole);
const users = { id: 34, role: 'admin', privileges: ['34', '34'] };
console.log(users);
const userStatus = 'pending';
const userStatus2 = 'Hello world';
const userStatus3 = 'approved';
const showStatus = (status) => {
    console.log('Your current application is', status);
};
showStatus(userStatus); //!as Status ব্যবহার করে আপনি টাইপস্ক্রিপ্টের টাইপ চ্যাকিং বা সিকিউরিটি মেকানিজমকে বাইপাস বা এড়িয়ে যাচ্ছেন।
showStatus(userStatus2); //! টাইপস্ক্রিপ্ট কোনো এরর দেবে না, কিন্তু রানটাইমে ভুল ডাটা পাস হবে!
showStatus(userStatus3);
const config = {
    port: 5000,
};
const currentPort = config.port;
const currentPort2 = config.port;
//*=== Const Assertion ===*//
const configaration = {
    port: 3434,
    prefix: '/api/v1',
};
// configaration.port = 34; //! Cannot assign to 'port' bcz it's a read-only proparty
//*=== enum ===*//
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
const showStatus3 = (status) => {
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
const getFare = (v) => {
    return fare[v];
};
console.log(getFare('bike'));
export {};
