/**
 * A generic function that ensures the given value is wrapped in an array.
 * If the input is already an array, it returns it unchanged.
 * @template T - The type of the input value.
 * @param {T | T[]} obj - The value to wrap in an array.
 * @returns {T[]} The input value as an array.
 */
function wrapInArray(obj) {
    return Array.isArray(obj) ? obj : [obj];
}
/**
 * A utility function that ensures an input is wrapped in an array and transforms its elements.
 * @template T, U
 * @param {T | T[]} obj - The value to wrap.
 * @param {(item: T) => U} transformFn - A function to apply to each element.
 * @returns {U[]} An array with transformed elements.
 */
function wrapAndTransform(obj, transformFn) {
    var array = wrapInArray(obj);
    return array.map(transformFn);
}
/**
 * A function that normalizes API responses by ensuring the data is always an array.
 * @template T
 * @param {ApiResponse<T>} response - The API response containing data.
 * @returns {T[]} The data from the response, always as an array.
 */
function normalizeApiResponse(response) {
    return wrapInArray(response.data);
}
// Example Usage:
// 1. Simple string wrapping
var singleString = "Hello";
var wrappedString = wrapInArray(singleString); // ["Hello"]
// 2. Array stays unchanged
var stringArray = ["One", "Two"];
var wrappedArray = wrapInArray(stringArray); // ["One", "Two"]
// 3. Wrapping and transforming numbers to strings
var wrappedNumbers = wrapAndTransform(5, function (num) { return "Number: ".concat(num); }); // ["Number: 5"]
// 4. Handling API responses
var response1 = { data: 42, message: "Single item response" };
var response2 = { data: [1, 2, 3], message: "Multiple items response" };
var normalized1 = normalizeApiResponse(response1); // [42]
var normalized2 = normalizeApiResponse(response2); // [1, 2, 3]
console.log(wrappedString, wrappedArray, wrappedNumbers, normalized1, normalized2);
