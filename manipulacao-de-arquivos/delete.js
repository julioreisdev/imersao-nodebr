import fs from "fs";
import { promisify } from "util";

const deleteFile = promisify(fs.unlink);

export async function delete_(source) {
  await deleteFile(source);
}
