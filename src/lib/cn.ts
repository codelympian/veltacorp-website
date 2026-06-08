/**
 * Tiny classname joiner — filters falsy values and joins with spaces.
 * Keeps component markup clean without pulling in a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
