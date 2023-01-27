const users = [
  {
    id: 1,
    name: "Tanjiro",
    email: "onirhashira@email.com",
  },
  {
    id: 2,
    name: "Kakashi",
    email: "hatake@email.com",
  },
];

const names = [];

names.push("for");
console.time("for");
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}
console.timeEnd("for");

names.push("forIn");
console.time("forIn");
for (let i in users) {
  names.push(users[i].name);
}
console.timeEnd("forIn");

names.push("forOf");
console.time("forOf");
for (let { name } of users) {
  names.push(name);
}
console.timeEnd("forOf");

console.log(names);
