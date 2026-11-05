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
console.log(student1);
