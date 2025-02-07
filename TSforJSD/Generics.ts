// Generics provide variables to types. A common example is an array.
// An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.

/**
 * A type alias for an array of strings.
 */
type StringArray = Array<string>;

/**
 * A type alias for an array of numbers.
 */
type NumberArray = Array<number>;

/**
 * A type alias for an array of objects containing a `name` property.
 */
type ObjectWithNameArray = Array<{ name: string }>;

/**
 * A utility type that extracts the element type of an array.
 * @template T - The array type.
 */
type ElementType<T> = T extends Array<infer U> ? U : never;

/**
 * A generic function that filters an array based on a predicate function.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The input array to filter.
 * @param {(item: T) => boolean} predicate - A function that returns `true` for elements to keep.
 * @returns {T[]} A new array containing only elements that match the predicate.
 */
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate);
}

/**
 * A function that extracts all names from an array of objects with a `name` property.
 * @param {ObjectWithNameArray} array - An array of objects with a `name` property.
 * @returns {StringArray} An array of extracted names.
 */
function extractNames(array: ObjectWithNameArray): StringArray {
  return array.map(item => item.name);
}

/**
 * A generic class that manages an array of items.
 * @template T - The type of elements in the array.
 */
class ArrayManager<T> {
  private items: T[];

  /**
   * Creates an instance of ArrayManager.
   * @param {T[]} initialItems - The initial array of items.
   */
  constructor(initialItems: T[]) {
    this.items = [...initialItems];
  }

  /**
   * Adds a new item to the array. (addItem or setItem?)
   * @param {T} item - The item to add.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes an item from the array by index.
   * @param {number} index - The index of the item to remove.
   * @returns {T | undefined} The removed item, or undefined if the index is invalid.
   */
  removeItem(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) return undefined;
    return this.items.splice(index, 1)[0];
  }

  /**
   * Gets all items in the array.
   * @returns {T[]} A copy of the array.
   */
  getItems(): T[] {
    return [...this.items];
  }
}

// Example Usage:

// Working with a string array
const strArray: StringArray = ["Alice", "Bob", "Charlie"];
const filteredStrings = filterArray(strArray, name => name.startsWith("A")); // ["Alice"]

// Working with a number array
const numberArray: NumberArray = [1, 2, 3, 4, 5];
const filteredNumbers = filterArray(numberArray, num => num > 2); // [3, 4, 5]

// Working with an array of objects
const objectArray: ObjectWithNameArray = [{ name: "John" }, { name: "Doe" }, { name: "Alice" }];
const names = extractNames(objectArray); // ["John", "Doe", "Alice"]

// Using the generic ArrayManager class
const manager = new ArrayManager<string>(["Item1", "Item2"]);
manager.addItem("Item3");
manager.removeItem(0);
const allItems = manager.getItems(); // ["Item2", "Item3"]

console.log(filteredStrings, filteredNumbers, names, allItems);
