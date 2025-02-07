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
 * A generic class implementing the `Backpack` interface.
 * This class can store one item at a time and retrieve it.
 * @template T - The type of items that the backpack will store.
 */
var SimpleBackpack = /** @class */ (function () {
    function SimpleBackpack() {
        this.item = null;
    }
    /**
     * Adds an item to the backpack.
     * @param {T} obj - The item to add.
     */
    SimpleBackpack.prototype.add = function (obj) {
        this.item = obj;
    };
    /**
     * Retrieves the stored item from the backpack.
     * @returns {T} The stored item.
     * @throws {Error} If no item is stored in the backpack.
     */
    SimpleBackpack.prototype.get = function () {
        if (this.item === null) {
            throw new Error("Backpack is empty!");
        }
        return this.item;
    };
    return SimpleBackpack;
}());
/**
 * A more advanced backpack that allows multiple items with an optional capacity limit.
 * @template T - The type of items that the backpack will store.
 */
var AdvancedBackpack = /** @class */ (function () {
    /**
     * Creates an instance of `AdvancedBackpack`.
     * @param {number | null} [capacity=null] - The maximum number of items allowed (optional).
     */
    function AdvancedBackpack(capacity) {
        if (capacity === void 0) { capacity = null; }
        this.items = [];
        this.capacity = capacity;
    }
    /**
     * Adds an item to the backpack.
     * @param {T} obj - The item to add.
     * @throws {Error} If the backpack is full.
     */
    AdvancedBackpack.prototype.add = function (obj) {
        if (this.capacity !== null && this.items.length >= this.capacity) {
            throw new Error("Backpack is full!");
        }
        this.items.push(obj);
    };
    /**
     * Retrieves the first stored item from the backpack.
     * @returns {T} The first stored item.
     * @throws {Error} If the backpack is empty.
     */
    AdvancedBackpack.prototype.get = function () {
        if (this.items.length === 0) {
            throw new Error("Backpack is empty!");
        }
        return this.items[0]; // Retrieve the first stored item
    };
    /**
     * Gets all items stored in the backpack.
     * @returns {T[]} An array of stored items.
     */
    AdvancedBackpack.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    return AdvancedBackpack;
}());
// Example Usage:
// Declaring a constant `backpack` with the `Backpack<string>` type
//   declare const backpack: Backpack<string>; // --- 
var backpack = new SimpleBackpack(); // +++
backpack.add("Matches");
// Getting an item from `backpack` (TypeScript knows it's a string)
var object = backpack.get();
console.log('backpack::', object); // Expected output: Some string value
// ERROR: Cannot pass a number to a Backpack<string>
//   backpack.add(23); // TypeScript error 🚨
// Using SimpleBackpack
var simpleBag = new SimpleBackpack();
simpleBag.add("Notebook");
console.log(simpleBag.get()); // "Notebook"
// Using AdvancedBackpack with a limit of 2 items
var advBag = new AdvancedBackpack(2);
advBag.add(10);
advBag.add(20);
console.log('advBag.getAll()::', advBag.getAll()); // [10, 20]
// Uncommenting the line below will throw an error because the backpack is full
// advBag.add(30); // Error: Backpack is full!
