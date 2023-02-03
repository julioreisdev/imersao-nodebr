import { users } from "./users.js";

function getUser(id, callback) {
  setTimeout(() => {
    const user = users.find((currently) => currently.id === id);
    return callback(!user, user);
  }, 1000);
}

getUser(0, (err, res) => {
  if (err) {
    console.log("Error: User not found");
    return;
  }
  console.log(res);
});
