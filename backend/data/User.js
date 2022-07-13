import bcrypt from "bcryptjs";

const users = [
  {
    name: "Ankita",
    email: "admin@hcc.in",
    password: bcrypt.hashSync("test1234", 10),
    isAdmin: true,
  },
  {
    name: "Aryan",
    email: "aryan@hcc.in",
    password: bcrypt.hashSync("test1234", 10),
  },
];

export default users;
