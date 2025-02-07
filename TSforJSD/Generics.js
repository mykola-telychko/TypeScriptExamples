var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * A generic function that filters an array based on a predicate function.
 * @template T - The type of elements in the array.
 * @param {T[]} array - The input array to filter.
 * @param {(item: T) => boolean} predicate - A function that returns `true` for elements to keep.
 * @returns {T[]} A new array containing only elements that match the predicate.
 */
function filterArray(array, predicate) {
    return array.filter(predicate);
}
/**
 * A function that extracts all names from an array of objects with a `name` property.
 * @param {ObjectWithNameArray} array - An array of objects with a `name` property.
 * @returns {StringArray} An array of extracted names.
 */
function extractNames(array) {
    return array.map(function (item) { return item.name; });
}
/**
 * A generic class that manages an array of items.
 * @template T - The type of elements in the array.
 */
var ArrayManager = /** @class */ (function () {
    /**
     * Creates an instance of ArrayManager.
     * @param {T[]} initialItems - The initial array of items.
     */
    function ArrayManager(initialItems) {
        this.items = __spreadArray([], initialItems, true);
    }
    /**
     * Adds a new item to the array.
     * @param {T} item - The item to add.
     */
    ArrayManager.prototype.addItem = function (item) {
        this.items.push(item);
    };
    /**
     * Removes an item from the array by index.
     * @param {number} index - The index of the item to remove.
     * @returns {T | undefined} The removed item, or undefined if the index is invalid.
     */
    ArrayManager.prototype.removeItem = function (index) {
        if (index < 0 || index >= this.items.length)
            return undefined;
        return this.items.splice(index, 1)[0];
    };
    /**
     * Gets all items in the array.
     * @returns {T[]} A copy of the array.
     */
    ArrayManager.prototype.getItems = function () {
        return __spreadArray([], this.items, true);
    };
    return ArrayManager;
}());
// Example Usage:
// Working with a string array
var strArray = ["Alice", "Bob", "Charlie"];
var filteredStrings = filterArray(strArray, function (name) { return name.startsWith("A"); }); // ["Alice"]
// Working with a number array
var numberArray = [1, 2, 3, 4, 5];
var filteredNumbers = filterArray(numberArray, function (num) { return num > 2; }); // [3, 4, 5]
// Working with an array of objects
var objectArray = [{ name: "John" }, { name: "Doe" }, { name: "Alice" }];
var names = extractNames(objectArray); // ["John", "Doe", "Alice"]
// Using the generic ArrayManager class
var manager = new ArrayManager(["Item1", "Item2"]);
manager.addItem("Item3");
manager.removeItem(0);
var allItems = manager.getItems(); // ["Item2", "Item3"]
console.log(filteredStrings, filteredNumbers, names, allItems);
