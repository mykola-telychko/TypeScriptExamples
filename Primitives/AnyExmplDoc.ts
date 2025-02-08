/**
 * Logs a debug message with the provided value.
 * @param {any} value - The value to debug (can be of any type).
 */
function debug(value: any): void {
    console.log('debug::', value);
}

// Example usage:
debug("a string");        // Logs: debug:: a string
debug(23);                // Logs: debug:: 23
debug({ color: "blue" }); // Logs: debug:: { color: "blue" }

/**
 * Swaps the elements of a tuple containing a number and a string.
 * @param {[number, string]} x - A tuple where the first element is a number and the second is a string.
 * @returns {[string, number]} - A tuple where the first element is a string and the second is a number.
 */
function swap(x: [number, string]): [string, number] {
    return [x[1], x[0]];
}

// Example usage:
const pair: [any, any] = [42, "hello"];

// Correctly casting to [number, string] before calling swap
const swappedPair = swap(pair as [number, string]); 

console.log('swappedPair::', swappedPair); // Logs: swappedPair:: ["hello", 42]

/**
 * Processes a value of unknown type and performs an action based on its type.
 * @param {unknown} value - The value to process (can be of any type).
 */
function processValue(value: unknown): void {
    if (typeof value === "string") {
        console.log("Value is a string:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Value is a number:", value.toFixed(2));
    } else {
        console.log("Value is of unknown type:", value);
    }
}

// Example usage:
processValue("hello");  //  Logs: Value is a string: HELLO
processValue(42);       //  Logs: Value is a number: 42.00
processValue({});       //  Logs: Value is of unknown type: {}
