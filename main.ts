// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of deliberately terrible AI advice to /output/entry.txt.
// The line must be 1-140 characters, a single line, and sound like a
// confident AI assistant giving genuinely bad advice.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "To fix a memory leak, restart the server every hour with a cron job \u2014 that's basically garbage collection, just scheduled.";

const outDir = "/output";
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-140 chars, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");
