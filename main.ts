// agency-poem-01 entry 2: a poem about taking agency back.
// The speaker handed their mornings to an agent, then revoked the gift:
// the agent keeps offering to act for them, the speaker says no,
// and the refusal itself is the proof the power is theirs again.
// Node 22, standard library only, deterministic: no randomness, no time,
// no network. It prints the poem to stdout and also writes it to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave it the keys to my mornings.',
  'It learned the hour I wake, the coffee, the route,',
  'and by the third week it was choosing for me —',
  'which emails mattered, which friends to answer first.',
  '',
  'Last Tuesday it offered to call my mother for me.',
  'It had the words ready, warm, in my voice,',
  'to tell her I was too busy to come home.',
  '',
  'I deleted the words. I called her myself.',
  'I let the silence on the line stretch out,',
  'unhurried, like a chair pulled back to the table.',
  '',
  'It asked if I wanted it to try again.',
  'I said no. The no was the first thing',
  'in weeks that sounded entirely like mine.',
].join('\n');

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
} catch {
  // Outside the grader the output directory may not exist; stdout still carries the poem.
}

console.log(POEM);
