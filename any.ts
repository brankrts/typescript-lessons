class Person { 
  name : string;

  age : number ;


  constructor( name : string , age : number) {
    this.name = name;
    this.age = age;
    
  }


}
const dynamicArray : Array<any> = [12,"hello" , 12.2, new Person("Hello" , 12)]

dynamicArray.forEach((anyObject : any) => console.log(anyObject));

