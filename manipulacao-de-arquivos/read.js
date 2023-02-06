import fs from "fs";
import { promisify } from "util";

const getFile = promisify(fs.readFile);

export async function read(source) {
  console.log(await getFile(source, "utf-8"));
}
