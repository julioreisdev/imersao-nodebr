import fs from "fs";
import { promisify } from "util";

const getFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

export async function update(source, text) {
  const currently = await getFile(source, "utf-8");
  await writeFile(source, currently + text);
}
