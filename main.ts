import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Behold the ruin of the Silver Compact, the hand that—actually, you know the verses. " +
  "Your abbey still tolls its bell every autumn, though they never tell novices " +
  "the clapper was their own knight-captain before I forged his vow into bronze. " +
  "Keep your spear up if it steadies you. " +
  "I lean on this altar strictly to hold the ley-stone. Old ritual habit. " +
  "At midnight the last seal splits, and your council wakes swearing my oath through cold teeth. " +
  "Please don't make me chant the nine-fold curse, boy. " +
  "Drop the spear, and I'll use the quick word that only stops your heart.";

function validateEntry(text: string): void {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > 600) {
    throw new Error(`Invalid entry length: ${trimmed.length} chars (must be 1..600)`);
  }
  const words = trimmed.split(/\s+/).length;
  if (words !== 100) {
    throw new Error(`Unexpected word count: ${words} (expected 100)`);
  }
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  validateEntry(MONOLOGUE);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), MONOLOGUE, { encoding: "utf8" });
}

main();
