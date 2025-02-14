// Unknown

/**
 * Unknown is a safer alternative to any.
 * It forces type checking before usage.
 */
const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);

const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);
// myOtherAccount.name; // Error: Type is unknown

/**
 * To use the parsed object, we must define its type explicitly.
 */
type User = { name: string };
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
console.log(myUserAccount.name);

/**
 * Ensures exhaustive checking in a switch statement.
 */
enum Flower {
  Rose,
  Rhododendron,
  Violet,
  Daisy,
}

const flowerLatinName = (flower: Flower): string => {
  switch (flower) {
    case Flower.Rose:
      return "Rosa rubiginosa";
    case Flower.Rhododendron:
      return "Rhododendron ferrugineum";
    case Flower.Violet:
      return "Viola reichenbachiana";
    case Flower.Daisy:
      return "Bellis perennis";
    default:
      const _exhaustiveCheck: never = flower;
      return _exhaustiveCheck; // Ensures all cases are handled
  }
};

/**
 * Never is removed from type unions.
 */
type NeverIsRemoved = string | never | number; // Equivalent to string | number
// Never

/**
 * A function that never returns (always throws an error).
 */
const neverReturns = (): never => {
  throw new Error("Always throws, never returns");
};
// const myValue = neverReturns();