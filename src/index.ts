console.log('Hello TypeScript');

let message: string ="I am aryan ";
console.log(message);

let age: number =10;
console.log(age);

let isMale: boolean =true;
console.log(`i am ${isMale}`);

let number:number[] = [1,2,3,4]
console.log(number);

let someValue: unknown = "Hello";
if (typeof someValue === "string") {
  console.log("Uppercase:", someValue.toUpperCase());
}


