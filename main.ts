import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Wait. Before the war-cry—could you close the crypt latch? The fen-wind blows my ash-powder everywhere, and I already swept this floor once since vespers. I hexed the High King's well seven winters back because he hanged my sister for salt-smuggling. Tonight the ninth bell rings, the crown's ward-stones crack, and the border lords take the rest. Sit if you like. I'm perched on the altar strictly for... vantage. Honestly, drop the shield. I do not have a grand duel in me tonight, which means I'm opening with the spell that melts your armor first.";

function validateEntry(text: string): void {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > 600) {
    throw new Error(`Invalid entry length: ${trimmed.length} chars (must be 1..600)`);
  }
  const words = trimmed.split(/\s+/).length;
  if (words < 80 || words > 120) {
    throw new Error(`Word count out of target range: ${words}`);
  }
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  validateEntry(MONOLOGUE);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), MONOLOGUE, { encoding: "utf8" });
}

main();
