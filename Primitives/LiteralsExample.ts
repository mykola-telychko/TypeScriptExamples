// TypeScript Literal Types & as const Simplified
// TypeScript treats literals as specific subtypes of general types.

// Literal vs. String Type
const helloWorld = "Hello TS"; // "Hello TS" (literal type)
let hiWorld = "Hi World"; // string (wider type)

/**
 * Function that only accepts "Hello TS" as an argument.
 * @param { "Hello TS" } arg - The allowed literal string.
 */
function allowsOnlyHello(arg: "Hello TS") {
    console.log(" allowsOnlyHello:", arg);
}

allowsOnlyHello(helloWorld); // 
// allowsOnlyHello(hiWorld); //  Error: Argument of type 'string' is not assignable to type '"Hello TS"'.

/**
 * Function that only accepts numbers 1 to 5.
 * @param { 1 | 2 | 3 | 4 | 5 } arg - Allowed literal numbers.
 */
function allowsFirstFiveNumbers(arg: 1 | 2 | 3 | 4 | 5) {
    console.log(" Number accepted:", arg);
}

allowsFirstFiveNumbers(1); // 
// allowsFirstFiveNumbers(10); //  Error

// Variables can break strict typing:
let num = 3;
allowsFirstFiveNumbers(num as 1 | 2 | 3 | 4 | 5); //  Works with type assertion

// Why Objects Don't Preserve Literals
const myUser = { name: "Sabrina" }; // `name` becomes `string`
myUser.name = "Cynthia"; // Allowed, because `name` is mutable

// Fixing with [as const]
const myUnchangingUser = { name: "Fatma" } as const;
// myUnchangingUser.name = "Raîssa"; //  Error: Cannot assign to 'name' because it is a read-only property.

console.log("Immutable user:", myUnchangingUser);

/**
 * Example function for handling an array of immutable users.
 * @param users - Read-only array of users
 */
function listUsers(users: readonly { name: string }[]) {
    users.forEach(user => console.log("__ User:", user.name));
}

// as const makes objects immutable and preserves literal types. Works with arrays too:
const exampleUsers = [{ name: "Brian" }, { name: "Fahrooq" }] as const;
listUsers(exampleUsers);
