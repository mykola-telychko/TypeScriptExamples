// https://www.typescriptlang.org/play/?&q=57#code/PTAEEEDsE9QSwM6gC4AsCmoAq0AO6BlAYwCc5dlR0EiBDfUIgG1oFcF0A6UATQHtWjWpFDtMw2Mj4AoEFThp0JUABN0zWiXGgORZHD4i+AM1DQByonzUo+oAEaYV0SLQC2cIqGErZYAFK0AG60xGQUoExwANboADSgfMpSoADuSdHeJAKQKpFwHsi0+oZIcCKKfih4mAjQCMjobpzSVeCgAOZ81kIcoMZJ3jDwSP4EAPIAcqC4mgjlHQBcrVaQDaBu0OP2AFbqlAC8oGNTnLMkHAAUAEQA3gC+1wCUANytclCwahpaSCk4+DC5EoKWQJHYlHMrEs1nESEcCyqCFoxkwjjoYjMAlA0UgfFSGyS4nsAkoCm4AFEgugRHBTGhiiMqnjKA0yHomJJwVxQAAxQboAAe7lwTHiKFQiEYsLSAiYeVItAQqGW0k22z2ek4gs40E4AC83lUAKrzSAdIZDWAdODUpBQiXEuBRZCSOypMiNaU2Zh8DjJGRyJJwG2uJjHYKhUjAtIKVCOlAkWhqAC0JlMJmqDGRqNdLSqEhGG1YRHjUVi3lAAHJXQxUs6VHQSCoq2lJaWsYI6CItKLaER0FV62grVnMJchQOIpB0NSSE9bBtaBXDJha3D5h1XPYxVVQRhEooSPnviwtP1WJA9AYRGp7KwOpcQkxWOhFlanu+gnw4CojXeHxuWgdDBBZnjeADHwAJgAZleaRIMuW5pSYJJ32uHdX2uUB7ngqoKX7eM6CYcMUkgotaBI-F0DydE2D6B0rFYeVQF7FgB0dAthmHeNFDHRJ6QPTQOlYNwaRBOw3GKUt8zkAFCGjCJ6xIlBl0wcoUn7JjIBBA9cD9BQbwEzi5AkMpbzpVEtB0-okjcBAEgGZQhRFMVYxHRQ+mQVhRWoKonITYxL2vQwshEsSdJPdQz0wIKrxKEQEFSehLkFd8AG1IFExwSASNkFgAXU-UB0vy80EiytwcoK-9os0TBVnWWY4BIDKJASCQaukJKUua+cjTkg9iNIuwetwCiqNSGiHHUei1yEkhwvEoQREcKopOQUtpvsWA2P7BZApa9ZC3KGZaBa9z40qnKuLyPjdEMPIAAMJCey6QLIc1ZLAABJekfLFJB6tAGcCRSKE8vQN8qGFNxfMWbzfIQd4wGNSBcXxWkgZ0OAdwO9dF3a+BTBOoGSVYVlaGgRE5GuH6cTxAlUlQYoq3hahkGuBJFBES8MdSLHK2St0dCp0A6arNxmT4VloUwZnGSlRwGjyuwHRnabQXQFSsAIBN12uKoXLhsVFj5xnIBTHwUxnOdpCAA

// Understanding any in TypeScript
// The any type in TypeScript serves as an escape hatch, allowing you to bypass the type system
// and write more dynamic, JavaScript-like code. While this can be useful in certain scenarios, it comes at the cost of type safety.
// Use Case: JSON Parsing
// A common use case for any is when working with JSON parsing, where the structure of the data might not be known in advance:
const myObject = JSON.parse("{}");
// By using any, you're telling TypeScript to trust that you know what you're doing, even if that might not always be the case.
// For example, the following code would crash at runtime because myObject doesn't have the expected structure:
// myObject.x.y.z; // Runtime error: Cannot read property 'y' of undefined

// any as a Type Wildcard
// The any type acts like a wildcard, allowing you to substitute it with any other type (except never). 
// This makes it highly flexible but also risky, as it bypasses TypeScript's type-checking mechanisms.
// For example, consider a function that accepts any:

declare function debug(value: any): void;

debug("a string");
debug(23);
debug({ color: "blue" });
// Each call to debug is allowed because any can be replaced with the type of the argument, making it compatible with any input.

// -- any in Tuples
// TypeScript also considers the position of any in more complex types, such as tuples. For example:

declare function swap(x: [number, string]): [string, number];

declare const pair: [any, any];
swap(pair);
// Here, the swap function call is allowed because TypeScript can match the any types in pair 
// to the expected types (number and string) in the function signature.

// -- unknown: A Safer Alternative
// While any provides flexibility, it sacrifices type safety. A safer alternative is the unknown type, 
// which forces you to explicitly define the type before using the value. If any says, 
// "I know what I'm doing," then unknown says, "I'm not sure, so I need you to tell me the type."
