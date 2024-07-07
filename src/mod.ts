/**
 * @module
 * @example
 * ```
 * ```
 */

import * as local from '@om/nekos-moe';
import { cdn } from './import.js';

/** @remarks */
export function pkgLocal(): void {
	console.log('Local:\n%o', local.info);
}

/** @remarks */
export function pkgCdn(): void {
	console.log('CDN:\n%o', cdn.info);
}
