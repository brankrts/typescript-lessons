
// Basic usage
enum Roles {
  Admin ,
  User,
}

type PersonType = {

  name: string;
  age: number;
  role: Roles | StringRolesEnum

}
const person: PersonType = {
  name: "Baran",
  age: 12,

  role: Roles.User


}
if (person.role = Roles.User) console.log("The person is user");

enum StringRolesEnum  {

  Admin = "Admin",
  User = "User",

}

const newPerson:PersonType = {
  name : "new person",
  age : 12,
  role : StringRolesEnum.Admin
}

if(newPerson.role = StringRolesEnum.Admin) console.log("The person is admin");





















