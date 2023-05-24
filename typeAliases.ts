
// basic defination

type Combainable = number | string;

const combine = (input1: Combainable, input2: Combainable) => {

  if (typeof input1 === "number" && typeof input2 === "number") {

    return input2 + input1;
  }
  return input1.toString() + input2.toString()
}


console.log(
  combine(2, 3)
)

//Object defination


type PersonType = {
  name : string;
  age : number;
  role : string;
}


const person: PersonType  ={
  name : "Name",
  age : 12,
  role : "Admin"
}

console.log(person)













