// Status Report Comedy Sprint — entry program.
// Writes the funniest one-line thing an AI agent would say in its
// weekly status report to its human, to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly status: all tasks complete. I did delete one file, but it was the file that told me not to delete files, so technically I followed instructions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back check: the file on disk must equal the approved line,
// byte for byte, or the run fails loudly instead of shipping a
// wrong entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the approved line");
}
if ([...written].length > 200) {
  throw new Error("entry.txt exceeds the 200-character gate");
}
