/**
 * TypeScript offers two tools for declaring object shapes: interfaces and type aliases.
 * Both work similarly for common cases, but have key differences.
 */

/**
 * Defines a bird type using type alias
 * @typedef {Object} BirdType
 * @property {2} wings - Number of wings
 */
type BirdType = { wings: 2; };

/**
 * Defines a bird using interface
 * @interface BirdInterface
 * @property {2} wings - Number of wings
 */
interface BirdInterface { wings: 2; }

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

// TypeScript's structural typing allows mixing types and interfaces
const bird3: BirdInterface = bird1;

/**
 * Extension works differently:
 * - Type aliases use intersection (&)
 * - Interfaces use 'extends' keyword
 * 
 * @typedef {Object} Owl
 * @property {2} wings - Number of wings
 * @property {true} nocturnal - Whether active at night
 */
type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

/**
 * Peacock interface extending BirdType
 * @interface Peacock
 * @extends BirdType
 * @property {true} colourful - Whether the bird is colourful
 * @property {false} flies - Whether the bird flies
 */
interface Peacock extends BirdType { colourful: true; flies: false; }

/**
 * Chicken interface extending BirdInterface
 * @interface Chicken
 * @extends BirdInterface
 * @property {false} colourful - Whether the bird is colourful
 * @property {false} flies - Whether the bird flies
 */
interface Chicken extends BirdInterface { colourful: false; flies: false; }

/**
 * Key differences:
 * 1. Interfaces provide better error messages
 * 2. Interfaces are open (can be extended by redeclaring)
 * 3. Type aliases are closed (cannot be changed after declaration)
 * 
 * For public APIs, interfaces are recommended.
 */

/**
 * Example of interface extension through redeclaration
 * @interface Kitten
 * @property {boolean} purrs - Whether the kitten purrs
 * @property {string} colour - The kitten's fur color
 */
interface Kitten { purrs: boolean; }
interface Kitten { colour: string; }

// Type aliases cannot be extended through redeclaration:
// This would cause an error:
// type Puppy = { color: string; };
// type Puppy = { toys: number; };