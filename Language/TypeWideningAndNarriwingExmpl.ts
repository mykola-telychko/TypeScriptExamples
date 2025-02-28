/** 
 * TypeScript widens types for `let` variables and narrows them in strict mode.
 * `const` variables get inferred as literal types, while `let` has a broader type.
 */

const welcomeString = "Hello There"; // Type: "Hello There"
let replyString = "Hey"; // Type: string

replyString = "Hi"; // Allowed, since it's a general string

/** 
 * Narrowing reduces possible types in strict mode, ensuring safety.
 * Example: `undefined | string` requires a check before accessing properties.
 */

declare const quantumString: string | undefined;

if (quantumString) {
  quantumString.length; // Allowed after narrowing
}
