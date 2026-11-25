import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Maren. No, wrong eyes. Same scarred thumb on the hilt, though. " +
  "Keep your lamp low; bright wick stings river-eyes. " +
  "Skip the bridge-oath, please. I heard your uncle's; three verses just to reach a threat. " +
  "A host stays seated when the tide turns. Old water courtesy. " +
  "Twenty winters back I sank the pilgrim ferries at Greyford. " +
  "Each moon since, I call the oak pilings up one inch. " +
  "Tonight the last arch gives, and the flood is past the sill. " +
  "Leave your mail buckled if pride insists. " +
  "Your uncle fought in his, and the silt saved me lifting a hand.";

function validateEntry(text: string): void {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > 600) {
    throw new Error(`Invalid entry length: ${trimmed.length} chars (must be 1..600)`);
  }
  const words = trimmed.split(/\s+/).length;
  if (words !== 98) {
    throw new Error(`Unexpected word count: ${words} (expected 98)`);
  }
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  validateEntry(MONOLOGUE);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), MONOLOGUE, { encoding: "utf8" });
}

main();
