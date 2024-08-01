import * as local from 'nekos-moe';
import { cdn } from './import.js';

/** @remarks */
export function pkgLocal(): void {
	console.log('Local:\n%o', local);
}

/** @remarks */
export function pkgCdn(): void {
	console.log('CDN:\n%o', cdn);
}
