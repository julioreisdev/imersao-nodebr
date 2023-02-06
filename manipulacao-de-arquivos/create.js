import fs from "fs";
import { promisify } from "util";

const createFile = promisify(fs.writeFile);

export async function create(source, text) {
  await createFile(source, text);
}
