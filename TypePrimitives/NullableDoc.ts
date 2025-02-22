/**
 * **Handling Null, Undefined, and Void in TypeScript**
 * 
 * TypeScript provides clear ways to handle **missing values** and **optional data** using `undefined`, `null`, and `void`.
 */

/** 
 * **`undefined`** → Value is **not set** or **missing**.
 */
const emptyObj = {};
const anUndefinedProperty: undefined = emptyObj["anything"]; // Property doesn't exist

/** 
 * **`null`** → Value is **intentionally empty**.
 */
const searchResults = {
  video: { name: "LEGO Movie" },
  text: null, // Intentionally no text
  audio: { name: "LEGO Movie Soundtrack" },
};

/**
 * 🆚 **Why use `null` instead of `undefined`?**  
 * - **`null`**: Clear absence of value  
 * - **`undefined`**: Value was never set  
 *  In JSON, `undefined` is ignored, but `null` is included.
 */

/**
 * ⚡ **Strict Null Checks (`strictNullChecks`)**  
 * - In **strict mode**, TypeScript forces handling of `null` and `undefined`.
 */
type PotentialString = string | undefined | null;

declare function getID(): PotentialString;

const userID = getID();
// In strict mode, this will error if `userID` is null/undefined
// console.log(userID.toUpperCase()); 

//  **Solutions:**
const definitelyString1 = getID() as string; // Type assertion
const definitelyString2 = getID()!;         // Non-null assertion

if (userID) {
  console.log(userID); // Safe check
}

/**
 * **Void Type**  
 * - Used when a function returns **nothing**.
 */
const voidFunction = (): void => { };
const resultOfVoidFunction = voidFunction(); // result is undefined

/**
 *  **Summary:**  
 * - Use `null` for intentional empty values.  
 * - Use `undefined` for missing data.  
 * - Use `void` for functions with no return.  
 * - Enable `strictNullChecks` for better type safety.
 */
