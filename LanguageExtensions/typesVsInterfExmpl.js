/**
 * TypeScript offers two tools for declaring object shapes: interfaces and type aliases.
 * Both work similarly for common cases, but have key differences.
 */
var bird1 = { wings: 2 };
var bird2 = { wings: 2 };
// TypeScript's structural typing allows mixing types and interfaces
var bird3 = bird1;
// Type aliases cannot be extended through redeclaration:
// This would cause an error:
// type Puppy = { color: string; };
// type Puppy = { toys: number; };
