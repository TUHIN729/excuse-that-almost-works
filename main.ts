// The Excuse That Almost Works — make.fun bounty
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// Writes the single line a gamer texts the boss to skip work during
// GTA 6 launch week to /output/entry.txt.
//
// The excuse: a lockout at 3am taking the bins out. The 3am detail is
// the whole joke — nobody takes the bins out at 3am unless they were
// still awake — but the excuse never says why, so a tired manager is
// left holding a boring, specific, almost-believable mishap instead of
// a wild story. "In my slippers" is the hurried-text tell: nobody
// rehearses slippers. "Can't get here" over "can't come" because that
// is how people actually text a boss when they are standing outside
// their own flat.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry, locked myself out at 3am taking the bins out in my slippers, locksmith can't get here till noon";

// The grader mounts /output for us; create it only if it is missing and
// never remove it — only write our single file inside it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

console.log(ENTRY);
