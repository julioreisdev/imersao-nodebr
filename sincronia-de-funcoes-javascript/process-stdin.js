/* Pegando dados no console com o STDIN */

const event = process.openStdin();
event.addListener("data", (value) => {
  console.log(value.toString());
});
