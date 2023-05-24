// functions return types

// funtion input and returning types
const add = (n1: number, n2: number): number => {

  return n1 + n2;

}

const toStringResult = (sum: number): string => {
  return sum.toString();
}

const printResult = (sum: string): void => {


  console.log(sum)

}
// undefined return type : when the function has no return value but it have to return anything

const undefinedReturn = (str: string): undefined => {
  if (str === "hello") console.log("str");
  // returning undefined value for this function 
  return;

}

console.log(undefinedReturn("world")) // undefined

printResult(toStringResult(add(2, 4)))


// Fuction type
//
//its a valid equation
const newFunc = undefinedReturn;

console.log(newFunc("hello"));


let combineValues: (n1: number, n2: number) => number;


combineValues = add;

console.log(combineValues(1, 2))

// callback fuctions
const addAndHandle = (n1: number, n2: number, cb: (result: number) => void) => {

  const result = n1 + n2;
  cb(result);
}

addAndHandle(2,3, (result) => {
  console.log("cb function result:",result);
})












