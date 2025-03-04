// https://michalzalecki.com/nominal-typing-in-typescript/

/**
 * Simulating nominal types using branded types.
 * Prevents accidental assignment of raw strings.
 */

type ValidatedInputString = string & { __brand: "Validated" };

const validateUserInput = (input: string): ValidatedInputString =>
  input.replace(/\</g, "≤") as ValidatedInputString;

const printName = (name: ValidatedInputString) => console.log(name);

const input = "alert('bobby tables')";
const validatedInput = validateUserInput(input);
printName(validatedInput);

// printName(input); // ❌ Type error
