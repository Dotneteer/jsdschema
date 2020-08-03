import * as fs from "fs";
import * as path from "path";

const source = "../jsdschema.json";
const dest = "../../out/jsdschema.json";

try {
  const srcFile = path.join(__dirname, source);
  const destFile = path.join(__dirname, dest);
  fs.copyFileSync(srcFile, destFile);
  console.log("JSDefender configuration schema file copied.");
} catch (err) {
  throw Error(err);
}
