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
