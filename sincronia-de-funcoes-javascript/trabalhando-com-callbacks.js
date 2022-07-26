/*
  Obter e imprimir usuário simulando que ele vem de alguma base de dados
*/

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "Júlio",
      password: "hashira123",
      email: "julio@email.com",
    });
  }, 2000);
}

/*
  Depois que getUser resolver sua chamada, ela chama uma função de callback e injeta nela parâmetros
  de erro e resultado, nessa ordem, e a função de callback se encarrega de imprimir o resultado sem 
  conflitos de sincronismo.
*/

getUser((error, user) => {
  if (error) {
    return false;
  }
  console.log(user);
});
