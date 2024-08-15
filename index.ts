import { readFileSync, writeFileSync } from 'node:fs';
import { parse, decode, objectify } from 'parse-osr';
//import { pkgLocal, pkgCdn } from './src/mod.ts';
//pkgLocal(); pkgCdn();
const replay = readFileSync('./local/r.osr');
const parsed = parse(replay, true);
console.log(parsed);