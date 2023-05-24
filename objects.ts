
type PersonObject = {
  name : string;
  age : number;
}
const person: PersonObject ={

  name: "Baran",
  age: 12
}


/// or 

const person2 : {
  name : string;
  age : number;

} = {
    name : "Baran",
    age : 34
  }

console.log(person.name, person.age);
console.log(person2.name,person2.age)






