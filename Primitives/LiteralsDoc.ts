// https://www.typescriptlang.org/play/?&q=88#code/PTAEBUE8AcFMGUDGAnAltALqAFgQwM6j4D2AtrKAGYCuAdkXIqrgDaiIGyGXHKguoMsZK0KpaAKBBFi1ZIgqJiAE1gA6CVLABJetFzIMAGlC5+xLMUqgM2CvmrRovLKkJKAbsNjLQ4mzAUAO6oqrTiAOZaprS+tAbIxCG0EaAAFKCwAB64pNAssABcGIEAtCFhkaW4saXxyInJqQCUMb6CAOT40UEu2OzEXmgpNnhYlKjI+Bga0QCC-ILCrH6EZqS8isS0KLBCRNQARiVwoFamAywFiBioXgFwGtIA6mOjbqDkNWKEtrhYACIABKwK7EUDPXgsZQA1YXabDCImQ7ULC4aIIyJw2gWUDA0EscGQ5DQ2HifChCi2KmBIiQaawUizJS0aY4AnEYnQ0AAXjxILBEKhMIA3BIClhsKgub4+cDUEKSaLQNJbB8PmZMSNDrAONR8BRBHCJZppOApdw6DdUNsbLgANZcUxXIgYRHdVSIFgGCg0Ha3W2sQlBfBzWiQeBuyJpAwRQquxHNMVBpKh8ORxFpOxgmVJiQpkNhiNRlJZ6XCvPRc0fP3W23bFiQUyIBSYX52BNYgRCERsfGCmUAiSe73IX1WgP0Av4ADytEbAsJMeQcf5HMVpLz07nC45WY5ueTYJDO8gi+IZcPprA1cIEsIkFkoBHPtAcwACtpCEEpYh+vqKDoG1WRscF8FwJtBGiBsm1wFtYDbC59EMVBEGoUdFh7VhCk0F8xyoCdgOdYN8AAMUmaZyK8AA5ahSB1KZl1XABGUAAB9QAAJnY0AAGYeIAFh4gBWLdjzIiiMCo2BaPo4R8DSZixJI8ipiku4ZLohiFOYgAGSsJVAZwhFoW4g0gItZIY3k+KPFTJOkqz5LSYzYFM5grgs8MnOQStpDmcZJNACJvR2WATDVQhkHQw18FoDo0ScAQfFAgY8gKLIzkOAArXUMHwZltjZUhIAAVQNPg+QAbwkUBQHich4wBeBcEOYZcABIwJAAXzFaJ4FgChsCSPwsDdb4eGQUhCAAAwaoo8RatrxA6mbUrm3IFq1CIZuiWAvHoWxZAifojQ+VQJloFKCAuFlphqGYIAtOEdT1A1omperNvYGpXVQF0-xqCIKBqJtbkazQSvK4Q1HmmyAQAYUgUypQ6vrpAAIV1XAAM+MqKq6L7yCMxI4EMJsOHoQGUnCiBAiQNBMGiSmcSwXHPu7ZY2CGClbX8T6TnsekhCZJ7vGiDUqFgf45GCX9+hCF0C1AR9qFS5RwUinAkn2mHNDurAoZ2PAUkiaHKtAGq6vmprSP+UgOq67rTHcIqMHRsBXjcvEboNsk1iS1AUowTWO2IHK8oiux6CNV6yC4aIzHD3KbkwrnQB-VD+g1rh4qwangb8VkhFwXxznRaRSFRVqCiylOsEzv8ftoWYjYLs2Kth765QAJVwAA7-BwIBD2fdd4v-YuCIx3+UDiDYSaqFQLIMFl3xlH+XATBqXx8jghPpB-bwVafN1pfzlQQbvJZezEedxHUMeBgn50SB6Xh7W-QR+gSCD8BwiQBtMg5HSrAc2hA+QAG0qpEwWgCDGaAaiwm6iYGBNs8R22wIkYgABHZBABdF2z9phiiAA
// TypeScript Literal Types & as const Simplified
// TypeScript treats literals as specific subtypes of general types.
// Literal vs. String Type
const helloWorld = "Hello TS"; // "Hello World" (literal type)
let hiWorld = "Hi World"; // string (wider type)

// Functions can enforce strict literals:
declare function allowsOnlyHello(arg: "Hello TS");
allowsOnlyHello(helloWorld); 
allowsOnlyHello(hiWorld); //  Error

// Using Unions for Literals
// declare function allowsFirstFiveNumbers(arg: 1 | 2 | 3 | 4 | 5);
allowsFirstFiveNumbers(1); 
allowsFirstFiveNumbers(10); //  Error

// Variables can break strict typing:
let num = 3;
allowsFirstFiveNumbers(num); //  Error (not strictly 1-5)

// Why Objects Don't Preserve Literals
const myUser = { name: "Sabrina" }; // `name` becomes `string`
myUser.name = "Cynthia"; // Allowed, so TypeScript widens the type

// Fixing with [as const]
const myUnchangingUser = { name: "Fatma" } as const;
myUnchangingUser.name = "Raîssa"; //  Error (read-only property)

// as const makes objects immutable and preserves literal types. Works with arrays too:
const exampleUsers = [{ name: "Brian" }, { name: "Fahrooq" }] as const