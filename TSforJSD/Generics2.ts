// reference https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
/**
 * A generic interface representing a storage container (Backpack) with add and get operations.
 * @template T - The type of items that the backpack will store.
 */
interface Backpack<T> {
    /**
     * Adds an item to the backpack.
     * @param {T} obj - The item to add.
     */
    add: (obj: T) => void;
  
    /**
     * Retrieves an item from the backpack.
     * @returns {T} The stored item.
     */
    get: () => T;
  }
  
  /**
   * A generic class implementing the `Backpack` interface.
   * This class can store one item at a time and retrieve it.
   * @template T - The type of items that the backpack will store.
   */
  class SimpleBackpack<T> implements Backpack<T> {
    private item: T | null = null;
  
    /**
     * Adds an item to the backpack.
     * @param {T} obj - The item to add.
     */
    add(obj: T): void {
      this.item = obj;
    }
  
    /**
     * Retrieves the stored item from the backpack.
     * @returns {T} The stored item.
     * @throws {Error} If no item is stored in the backpack.
     */
    get(): T {
      if (this.item === null) {
        throw new Error("Backpack is empty!");
      }
      return this.item;
    }
  }
  
  /**
   * A more advanced backpack that allows multiple items with an optional capacity limit.
   * @template T - The type of items that the backpack will store.
   */
  class AdvancedBackpack<T> implements Backpack<T> {
    private items: T[] = [];
    private capacity: number | null;
  
    /**
     * Creates an instance of `AdvancedBackpack`.
     * @param {number | null} [capacity=null] - The maximum number of items allowed (optional).
     */
    constructor(capacity: number | null = null) {
      this.capacity = capacity;
    }
  
    /**
     * Adds an item to the backpack.
     * @param {T} obj - The item to add.
     * @throws {Error} If the backpack is full.
     */
    add(obj: T): void {
      if (this.capacity !== null && this.items.length >= this.capacity) {
        throw new Error("Backpack is full!");
      }
      this.items.push(obj);
    }
  
    /**
     * Retrieves the first stored item from the backpack.
     * @returns {T} The first stored item.
     * @throws {Error} If the backpack is empty.
     */
    get(): T {
      if (this.items.length === 0) {
        throw new Error("Backpack is empty!");
      }
      return this.items[0]; // Retrieve the first stored item
    }
  
    /**
     * Gets all items stored in the backpack.
     * @returns {T[]} An array of stored items.
     */
    getAll(): T[] {
      return [...this.items];
    }
  }
  
  // Example Usage:
  
  // Declaring a constant `backpack` with the `Backpack<string>` type
   //   declare const backpack: Backpack<string>; // --- 
  const backpack: Backpack<string> = new SimpleBackpack<string>(); // +++
  backpack.add("Matches")
  // Getting an item from `backpack` (TypeScript knows it's a string)
  const object = backpack.get();
  console.log('backpack::', object); // Expected output: Some string value
  
  // ERROR: Cannot pass a number to a Backpack<string>
//   backpack.add(23); // TypeScript error 🚨
  
  // Using SimpleBackpack
  const simpleBag = new SimpleBackpack<string>();
  simpleBag.add("Notebook");
  console.log(simpleBag.get()); // "Notebook"
  
  // Using AdvancedBackpack with a limit of 2 items
  const advBag = new AdvancedBackpack<number>(2);
  advBag.add(10);
  advBag.add(20);
  console.log('advBag.getAll()::', advBag.getAll()); // [10, 20]
  
  // Uncommenting the line below will throw an error because the backpack is full
  // advBag.add(30); // Error: Backpack is full!
  
  