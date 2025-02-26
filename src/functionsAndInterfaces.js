function add(a, b) {
    return a + b;
}
console.log(add(10, 5));
function greet(name, message) {
    return "Hello, ".concat(name, "! ").concat(message || "Welcome!");
}
console.log(greet("Aryan"));
console.log(greet("Aryan", "Have a great day!"));
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(4));
console.log(multiply(4, 5));
function introduce(person) {
    return "Hi, I'm ".concat(person.name, ", ").concat(person.age, " years old. Student: ").concat(person.isStudent);
}
var user = {
    name: "Aryan",
    age: 21,
    isStudent: true,
};
console.log(introduce(user));
function displayEmployeeDetails(emp) {
    return "Employee: ".concat(emp.name, ", Job: ").concat(emp.jobTitle, ", Age: ").concat(emp.age, ", Salary: ").concat(emp.salary || "Not disclosed");
}
var employee = {
    name: "Aryan",
    age: 21,
    isStudent: false,
    jobTitle: "Software Developer",
};
console.log(displayEmployeeDetails(employee));
