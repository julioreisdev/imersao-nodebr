import fs from "fs";
import { promisify } from "util";

const get = promisify(fs.readFile);

export function getFile() {
  return get("./todo.txt", "utf-8");
}
