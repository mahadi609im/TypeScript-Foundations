class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const e1 = new Employee('Maha', 300000);
const e2 = new Employee('Maha', 43343430);
console.log(e1, e2);
//**TypeScript gives us access Modifier
// public //? public is base form
// private
// protected
// readonly */
//Todo -> Private
class Product {
    name;
    price;
    stock;
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = price;
    }
}
const product1 = new Product('Apple', 20, 34);
// Private
// product1.price = -242; //! Property 'price' is private and only accessible within class 'Product'.
// console.log(product1.price); //!read write kisui korte parbo naa
//Todo -> Readonly
class Menu {
    price;
    constructor(name, price) {
        this.price = price;
    }
}
const item1 = new Menu('pizza', 34);
// item1.price = -242; //! cannot bcz it's only readonly proparty.
console.log(item1.price);
//Todo -> private but read & write with control
class Student {
    roll;
    constructor(name, roll) {
        this.roll = roll;
    }
    get rollNumber() {
        return this.roll;
    }
    set rollNumber(newNumber) {
        if (newNumber < 0) {
            throw new Error('Cannot be set negative value');
        }
        this.roll = newNumber;
    }
}
const s1 = new Student('Maha', 34);
const s2 = new Student('haha', 30);
s1.rollNumber = 43030;
console.log(s1.rollNumber);
//*=== Inheritance ===*//
class Employee1 {
    id;
    name;
    salary;
    skills;
    constructor(id, name, salary, skills) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.skills = skills;
    }
    describe() {
        return `${this.name} has ${this.salary} and his skills set ${this.skills}`;
    }
}
class Manager extends Employee1 {
    teamMember;
    constructor(id, name, salary, skills, teamMember) {
        super(id, name, salary, skills);
        this.teamMember = teamMember;
    }
    describeManager() {
        // return `${this.id} - ${super.describe()} and manages ${this.teamMember} team members`; //! private naa die protected dile parent class er sathe connected class der k access korte dibe... jodi private baire access korte e hoy, tahole get method er maddhome o kora jay
        return `${this.name} has ${this.salary} and his skills set ${this.skills} and manages ${this.teamMember} team members`;
    }
}
const m1 = new Manager(3, 'Maha', 24043, 'js', 234);
console.log(m1.describeManager());
//*=== Polimorphism ===*//
class Employee2 {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    get employeeSalary() {
        return this.salary;
    }
    set employeeSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('salary must be 0 or more');
        }
        this.salary = newSalary;
    }
    calculatePay(taxRate) {
        return this.salary - this.salary * taxRate;
    }
}
class Marketer extends Employee2 {
}
class Manager2 extends Employee2 {
    //override chaile likhte pari naao pari
    calculatePay() {
        return this.salary + 500;
    }
}
//* calculatePay() function a jodi parameter nite chai must parent theke nite hobe, shudu child a nile hobe naa
class Developer extends Employee2 {
    type;
    constructor(name, salary, type) {
        super(name, salary);
        this.type = type;
    }
    calculatePay(taxRate) {
        return this.salary - this.salary * taxRate;
    }
}
const emp12 = new Employee2('Maha', 300);
const mark1 = new Marketer('Haha', 30);
const man12 = new Manager2('Mahadi', 5000);
const dev1 = new Developer('Mahadi', 100, 'Programmer');
console.log(emp12.calculatePay(0.1));
console.log(man12.calculatePay());
console.log(dev1.calculatePay(0.1));
//*=== Abstraction ===*//
class Employee5 {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    get empSalary() {
        return this.salary;
    }
    set empSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('please gives positive value');
        }
        this.salary = newSalary;
    }
}
class Manager5 extends Employee5 {
    salaryPay() {
        return this.empSalary + 5000;
    }
    getSalam() {
        return 'Assalamu-alaikum';
    }
}
class Developer5 extends Employee5 {
    salaryPay() {
        return this.empSalary + 2000;
    }
    getSalam() {
        return 'Assalamu-alaikum';
    }
}
export {};
