class BasePerson {

  protected name: string;
  protected age: number;
  protected surname: string;

  constructor(name: string, surname: string, age: number, protected email?: string) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

class DeveloperPerson extends BasePerson {

  private company: string;
  private programmingLanguage: string;
  private framworks: Array<String>;
  constructor(
    name: string, surname: string, age: number
  ) {
    super(name, surname, age);
  }

}

class Driver extends BasePerson implements IDriver {

  private drivingState : boolean;
  private carType: CarTypeEnums;

  constructor(name: string, surname: string, age: number) {
    super(name, surname, age);
  }

  public setCartype(type: CarTypeEnums) {
    this.carType = type;
  }


  drive(cb: (isDriwing : boolean) => boolean):void {

   cb(this.drivingState);  

  }
  turnLeft():boolean { 

    return false;

  }
  turnRight():boolean { 

    return true;

  }


}


interface IDriver {

  drive: (cb: (isDriwing: boolean) => boolean) => void;
  turnLeft: () => boolean;
  turnRight: () => boolean;


}

enum CarTypeEnums {
  BMW, MERCEDES, AUDI
}


const driver = new Driver("baran" , "karats" , 12);

driver.setCartype(CarTypeEnums.BMW);










class GenericClass<T>   {


  private value: T | undefined;

  constructor(private name: string) { }

  public getName() {
    return this.name;
  }

  public getValue(): T | undefined {

    return this.value;

  }

  public setValue(value: T) {

    this.value = value;
  }


}

const genericClass = new GenericClass<number>("Number");
console.log(genericClass.getName())

genericClass.setValue(12)

console.log(genericClass.getValue())


interface Car {
  make: string;
  model: string;
  mileage?: number;
}
// interface props are optionals
let myCar: Partial<Car> = {}
myCar.model = "BMW";
myCar.make = "Turkey"


// Interface all options is required // required is default

let myNewCar: Required<Car> = {
  model: "BMW",
  make: "Brazil",
  mileage: 10000,
}

// Record  : its allow us to  define the object fields type

const RecordObject: Record<string, number> = {
  "alice": 24,
  "bob": 23,
}
