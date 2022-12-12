// class User {
  
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }

//   getIntroduction() {
//     return `Hi, my name is ${this.name}`;
//   }
// }

class UserBase {

  constructor(users) {
    this.users = users;
  }

  getNames() {
    return users.map((user) => {
      return user.getName();
    })
  }

  getIntroductions() {
    return users.map((user) => {
      return user.getIntroduction();
    }) 
  }
}

module.exports = UserBase;

// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];

// const userBaseOne = new UserBase(users);

// console.log(userBaseOne.getNames());
// console.log(userBaseOne.getIntroductions());