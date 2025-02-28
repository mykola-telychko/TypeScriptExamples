/** 
 * Conditional types allow basic logic in TypeScript types.
 * Syntax: `A extends B ? C : D`
 */

type Cat = { meows: true };
type Dog = { barks: true };
type Wolf = { barks: true; howls: true };

/** Extracts types that match `{ barks: true }` */
type ExtractDogish<A> = A extends { barks: true } ? A : never;

type Dogish = ExtractDogish<Cat | Dog | Wolf>; // Dog | Wolf

/** 
 * Conditional types can defer evaluation, returning different 
 * types based on input.
 */
declare function getID<T extends boolean>(fancy: T): T extends true ? string : number;

let str = getID(true); // string
let num = getID(false); // number

/** Uses `infer` to extract return type from a function */
type GetReturnValue<T> = T extends (...args: any[]) => infer R ? R : T;

type IDReturn = GetReturnValue<typeof getID>; // string | number
