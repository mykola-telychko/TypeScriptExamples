// Tuples are arrays where the order and types of elements are fixed. 
// Unlike regular arrays (which can contain any number of elements of a single type),
// tuples are useful for storing connected data with a specific structure.
// Example 1: Basic Tuple
const failingResponse: [string, number] = ["Not Found", 404];
const passingResponse: [string, number] = ["{}", 200];

// failingResponse and passingResponse are tuples with a fixed structure: a string followed by a number.
// TypeScript enforces the order and types of elements.
// Example 2: Accessing Tuple Elements
if (passingResponse[1] === 200) {
  const localInfo = JSON.parse(passingResponse[0]); // Safe to access index 0 as a string
  console.log(localInfo);
}

// TypeScript ensures the correct type at each index.
// Example 3: Optional and Spread Elements
type StaffAccount = [number, string, string, string?]; // Optional 4th element
const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"], // Optional 4th element
];

type PayStubs = [StaffAccount, ...number[]]; // Spread for variable-length numbers
const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260], // Variable-length numbers
];

// Tuples can have optional elements (string?) or use 
// the spread operator (...number[]) for variable-length data.
// Example 4: Functions with Tuples
function calculatePayForEmployee(id: number, ...salaries: number[]): number {
  return salaries.reduce((total, pay) => total + pay, 0);
}
calculatePayForEmployee(staff[0][0], payStubs[0][1]); // Accepts variable arguments

// Tuples can describe functions with variable arguments of specific types.
// Key Points:
// Order Matters: Tuples enforce a specific order of types.
// Fixed Structure: The length and types are guaranteed.
// Use Cases: Short, connected data (e.g., API responses, fixtures).