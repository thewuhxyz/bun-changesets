import { multiply } from "bun-changesets-lib-a";

/**
 * Get the square of a given number
 * @param a given number
 * @returns a squared
 */
export function square(a: number): number {
	return multiply(a, a);
}
