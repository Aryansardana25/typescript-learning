function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(10, 5)); 

  function greet(name: string, message?: string): string {
    return `Hello, ${name}! ${message || "Welcome!"}`;
  }
  
  console.log(greet("Aryan")); 
  console.log(greet("Aryan", "Have a great day!")); 
  
  function multiply(a: number, b: number = 2): number {
    return a * b;
  }
  
  console.log(multiply(4)); 
  console.log(multiply(4, 5)); 
  
  
  interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  
  function introduce(person: Person): string {
    return `Hi, I'm ${person.name}, ${person.age} years old. Student: ${person.isStudent}`;
  }
  
  const user: Person = {
    name: "Aryan",
    age: 21,
    isStudent: true,
  };
  
  console.log(introduce(user)); 

  interface Employee extends Person {
    jobTitle: string;
    salary?: number;
  }
  
  function displayEmployeeDetails(emp: Employee): string {
    return `Employee: ${emp.name}, Job: ${emp.jobTitle}, Age: ${emp.age}, Salary: ${emp.salary || "Not disclosed"}`;
  }
  
  const employee: Employee = {
    name: "Aryan",
    age: 21,
    isStudent: false,
    jobTitle: "Software Developer",
  };
  
  console.log(displayEmployeeDetails(employee));
  