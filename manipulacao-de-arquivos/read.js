import { getFile } from "./getFile.js";

export async function read() {
  const file = await getFile();
  console.log(file);
}
