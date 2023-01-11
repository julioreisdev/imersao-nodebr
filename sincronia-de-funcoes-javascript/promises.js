/*
  Obter por id e imprimir um usuário simulando que ele vem de alguma base de dados
*/

/*
  Se tiver um id correspondente na lista de usuários, a função getUsers retornará a
  promise com resolve passando o usuário encontrado.
  Se não houver usuário com aquele id, retornará a promise com o reject passando a mensagem "USER NOT FOUND".
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

const busca = getUsers(0);
busca
  .then((res) => {
    console.log(res.name);
  })
  .catch((err) => {
    console.log(err);
  });
