import * as fs from "fs";
import * as path from "path";

const source = "../fileIcons/jsdefender-icon-theme.json";
const dest = "../../out/jsdefender-icons.json";

try {
    const srcFile = path.join(__dirname, source);
    const destFile = path.join(__dirname, dest);
    fs.copyFileSync(srcFile, destFile);
    console.log("JSDefender icon theme file copied.");
} catch (err) {
    throw Error(err);
}