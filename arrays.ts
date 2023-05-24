// types ->  type [] , Array<type>


const stringArray  : string []  = ["Hello" , "world" , "from" , "typescript"]

stringArray.forEach((str) => {
  console.log(str);
})

class Person {
  name : string;
  age : number;
  constructor( name : string, age : number) {
    
    this.name = name;
    this.age = age;
    
  }
}

const personArray : Array<Person>  = [
  new Person("Kemal", 12),
  new Person("Kemal2", 12),
  new Person("Kemal3", 12),
  new Person("Kemal4", 12),
]

personArray.forEach(person => console.log(person.name));



