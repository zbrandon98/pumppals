const SCRIPTNAME = "schema_gen";

const { exec } = require("child_process");
const os = require("os");

function puts(error, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
}

// Run command depending on the OS
if (os.type() === "Linux" || os.type() === "Darwin") {
  exec(`bash ./scripts/${SCRIPTNAME}.sh`, puts);
} else if (os.type() === "Windows_NT") {
  exec(`./scripts/${SCRIPTNAME}.bat`, puts);
} else {
  throw new Error(`Unsupported OS found: ${os.type()}`);
}
