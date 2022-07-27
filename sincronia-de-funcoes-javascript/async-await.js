/*
  Obter por id e imprimir um usuário simulando que ele vem de alguma base de dados
*/

function getUsers(userId) {
  const users = [
    {
      id: 1,
      name: "Tanjiro",
      email: "tanjiro@email.com",
      password: "umdiafuihumano",
    },
    {
      id: 2,
      name: "Nezuko",
      email: "nezuko@email.com",
      password: "umdiafuihumana",
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
          return resolve(users[i]);
        }
      }
      reject("USER NOT FOUND");
    }, 2000);
  });
}

/* 
  O console.log na linha 41 espera promise ser resolvida para imprimir.
  Se cair no reject da promise da função getUsers, o catch pegará o que veio de resposta
  e o console.log da linha 43 impimirá o erro. 
*/

async function searchUser(id) {
  try {
    let user = await getUsers(id);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

searchUser(11);
