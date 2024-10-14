export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }
  static signUp(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
  }

  static signIn(email, password) {
    const user = users.find(
      (user) => user.email == email && user.password == password
    );
    return user;
  }
   static getAll(){
    return users;
   }
}

var users = [
  {
    id: 1,
    name: "Vivek Dutt",
    email: "abc@gmail.com",
    password: "1234",
    type: "seller",
  },
];
 