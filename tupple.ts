

type PersonType = { 

  name : string;
  age : number;
  hobbies : string[]
  role :[number , string] 

}


const person : PersonType  = {

  name:"Baran" , 
  age : 12,
  hobbies : ["football" , "Basketball"],
  role : [12,"Admin"]

}



person.role.push("hello");

console.log(person);
