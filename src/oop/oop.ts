class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
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
  name: string;
  private price: number;
  readonly stock: number;

  constructor(name: string, price: number, stock: number) {
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
  constructor(
    name: string,
    readonly price: number,
  ) {}
}

const item1 = new Menu('pizza', 34);

// item1.price = -242; //! cannot bcz it's only readonly proparty.
console.log(item1.price);

//Todo -> private but read & write with control
class Student {
  constructor(
    name: string,
    private roll: number,
  ) {}

  get rollNumber(): number {
    return this.roll;
  }

  set rollNumber(newNumber: number) {
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
  constructor(
    private id: number,
    public name: string,
    public salary: number,
    protected skills: string,
  ) {}

  describe(): string {
    return `${this.name} has ${this.salary} and his skills set ${this.skills}`;
  }
}

class Manager extends Employee1 {
  constructor(
    id: number,
    name: string,
    salary: number,
    skills: string,
    public teamMember: number,
  ) {
    super(id, name, salary, skills);
  }

  describeManager(): string {
    // return `${this.id} - ${super.describe()} and manages ${this.teamMember} team members`; //! private naa die protected dile parent class er sathe connected class der k access korte dibe... jodi private baire access korte e hoy, tahole get method er maddhome o kora jay
    return `${this.name} has ${this.salary} and his skills set ${this.skills} and manages ${this.teamMember} team members`;
  }
}

const m1 = new Manager(3, 'Maha', 24043, 'js', 234);
console.log(m1.describeManager());
