/**
 * TypeScript prioritizes simplicity and usability over full type soundness,
 * leading to some trade-offs where the compiler allows unsafe operations.
 */

/** Type Assertion Example */
const usersAge = ("23" as any) as number; // Forces type, even if incorrect

/** Interfaces for Event Handling */
interface InputEvent {
  timestamp: number;
}
interface MouseInputEvent extends InputEvent {
  x: number;
  y: number;
}
interface KeyboardInputEvent extends InputEvent {
  keyCode: number;
}

/**
 * Listens for keyboard or mouse events.
 * @param eventType - The type of event ("keyboard" or "mouse")
 * @param handler - Function to handle the event
 */
function listenForEvent(eventType: "keyboard" | "mouse", handler: (event: InputEvent) => void) {}

// Allows subtype handlers
listenForEvent("keyboard", (event: KeyboardInputEvent) => {});
listenForEvent("mouse", (event: MouseInputEvent) => {});
listenForEvent("mouse", (event: {}) => {}); // Broadest valid type

// Invalid: string is incompatible
// listenForEvent("mouse", (event: string) => {}); // Error

/**
 * Generates random numbers and passes them to a callback.
 * @param count - Number of random numbers
 * @param callback - Function to handle the numbers
 */
function getRandomNumbers(count: number, callback: (...args: number[]) => void) { }

getRandomNumbers(2, (first, second) => console.log([first, second]));
getRandomNumbers(400, (first) => console.log(first));

/**
 * Accepts a void-returning function but allows functions with return values.
 * @param func - Function to execute
 */
function runFunction(func: () => void) {
  func();
}

const getPI = () => 3.14;
runFunction(getPI); // Allowed despite return value
