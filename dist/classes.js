"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logdetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
const Piccolo = new UserAccount("Piccolo", 43);
console.log(Piccolo);
console.log(Piccolo.age);
console.log(Piccolo.name);
Piccolo.logdetails();
const John = new CharAccount("John", 45, "JohnMaster", 80);
//John.nickname = "willJusten"
John.logdetails();
