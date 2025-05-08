import { multiply } from "bun-changesets-lib-a";

export function square(a: number): number {
	return multiply(a, a);
}
