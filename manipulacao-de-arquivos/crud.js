import { create } from "./create.js";
import { delete_ } from "./delete.js";
import { read } from "./read.js";
import { update } from "./update.js";
import { program } from "commander";

function main() {
  program
    .version("0.0.1")
    .option("--read", "read file")
    .option("--update [file] [value]", "Update file")
    .option("--create [file] [value]", "Create File")
    .option("--delete [file]", "Delete file")
    .parse(process.argv);

  const options = program.opts();

  if (options.read) {
    read("./todo.txt");
  }

  if (options.update) {
    const file = program.rawArgs[program.rawArgs.length - 2];
    const value = program.rawArgs[program.rawArgs.length - 1];
    update(file, `\n${value}`);
  }

  if (options.create) {
    const file = program.rawArgs[program.rawArgs.length - 2];
    const value = program.rawArgs[program.rawArgs.length - 1];
    create(file, `\n${value}`);
  }

  if (options.delete) {
    const file = program.rawArgs[program.rawArgs.length - 1];
    delete_(file);
  }
}

main();
