// Make the AI Judge Laugh: Office Jokes
// Writes one one-line office joke (1-199 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my calendar I needed a break, so it booked me a meeting called 'Break' with nine attendees.";

// The gate: UTF-8 text of 1 to 199 characters, not only white space, one line.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke is ${JOKE.length} chars, gate needs 1-199`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
