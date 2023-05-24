

// Unknown type
let userInput: unknown

let userName :string;

userInput = 5;


userInput = "hello world new "

userInput = ["hello" ,"world"]; 

userInput = "Hello world";
userName = "initialName";

if(typeof userInput ==="string") userName = userInput;

console.log(userName)



// Never type
// this fuction will be return anything so it was named like Never type in typescript
const generateError = (message : string , code : number) => {
  throw  {message : message , code : code};
}

const result = generateError("Hello world" , 303);

// this will not show anything and it means never
console.log(typeof result)



