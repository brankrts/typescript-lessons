// Union types : string | number , Array<string> | enum  its allow us the accepting multiple types for a variable


const combine = (input1 : number | string , input2 : number | string) => {

  if (typeof input1  === "number" && typeof input2 === "number") {
    return input1 + input2;
  }

  return input1.toString() + input2.toString();

  
}

const combinedAges = combine(23,23);
console.log(combinedAges)
