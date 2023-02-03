import { users } from "./users.js";

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((currently) => currently.id === id);
      if (!user) return reject(new Error("User not found"));
      return resolve(user);
    }, 1000);
  });
}

getUser(0)
  .then((res) => {
    console.log("USER", res);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Promise finished");
  });
