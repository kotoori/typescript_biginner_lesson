"use strict";
const user1 = {
    id: 1,
    name: "Taro",
};
const user2 = {
    id: 2,
    name: "Hanako",
    email: "hanako@example.com"
};
user1.name = "Jiro";
// user1.id = 3; //これはエラーになる
function showUser(user) {
    console.log(`ID:${user.id}`);
    console.log(`Name:${user.name}`);
    if (user.email !== undefined) {
        console.log(`Email:${user.email}`);
    }
}
showUser(user1);
showUser(user2);
