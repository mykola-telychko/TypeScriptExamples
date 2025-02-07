//  TypeScript Example: Generic Wrapper with Type Guards & Utility Types

/**
 * A generic function that ensures the given value is wrapped in an array.
 * If the input is already an array, it returns it unchanged.
 * @template T - The type of the input value.
 * @param {T | T[]} obj - The value to wrap in an array.
 * @returns {T[]} The input value as an array.
 */
function wrapInArray<T>(obj: T | T[]): T[] {
    return Array.isArray(obj) ? obj : [obj];
}
  
  /**
   * A utility function that ensures an input is wrapped in an array and transforms its elements.
   * @template T, U
   * @param {T | T[]} obj - The value to wrap.
   * @param {(item: T) => U} transformFn - A function to apply to each element.
   * @returns {U[]} An array with transformed elements.
   */
  function wrapAndTransform<T, U>(obj: T | T[], transformFn: (item: T) => U): U[] {
    const array = wrapInArray(obj);
    return array.map(transformFn);
  }
  
  /**
   * A generic interface representing a response with either a single item or multiple items.
   * @template T - The type of the item(s).
   */
  interface ApiResponse<T> {
    data: T | T[];
    message: string;
  }
  
  /**
   * A function that normalizes API responses by ensuring the data is always an array.
   * @template T
   * @param {ApiResponse<T>} response - The API response containing data.
   * @returns {T[]} The data from the response, always as an array.
   */
  function normalizeApiResponse<T>(response: ApiResponse<T>): T[] {
    return wrapInArray(response.data);
  }
  
  // Example Usage:
  
  // 1. Simple string wrapping
  const singleString = "Hello";
  const wrappedString = wrapInArray(singleString); // ["Hello"]
  
  // 2. Array stays unchanged
  const stringArray = ["One", "Two"];
  const wrappedArray = wrapInArray(stringArray); // ["One", "Two"]
  
  // 3. Wrapping and transforming numbers to strings
  const wrappedNumbers = wrapAndTransform(5, num => `Number: ${num}`); // ["Number: 5"]
  
  // 4. Handling API responses
  const response1: ApiResponse<number> = { data: 42, message: "Single item response" };
  const response2: ApiResponse<number> = { data: [1, 2, 3], message: "Multiple items response" };
  
  const normalized1 = normalizeApiResponse(response1); // [42]
  const normalized2 = normalizeApiResponse(response2); // [1, 2, 3]
  
  console.log(wrappedString, wrappedArray, wrappedNumbers, normalized1, normalized2);

//   Features in This Example:
// - Uses generics (T, U) to allow flexibility with any data type.
// - Implements type guards (Array.isArray) to differentiate between string and array inputs.
// - Introduces a higher-order function (wrapAndTransform) to transform wrapped values.
// - Uses interfaces (ApiResponse<T>) to define structured API responses.
// - Ensures data consistency in APIs by always returning an array.