/**
 * Enums define named sets of constants, useful for readability.
 */

// Numeric enum (default: starts at 0)
enum CompassDirection {
  North,
  East,
  South,
  West,
}

const direction = CompassDirection.East;

// Enum with custom values
enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
}

const currentStatus = StatusCodes.OK;

// String-based enum
enum GamePadInput {
  Up = "UP",
  Down = "DOWN",
}

const input = GamePadInput.Up;

// Const enum (removes runtime overhead)
const enum MouseAction {
  MouseDown,
  MouseUp,
}

const action = MouseAction.MouseDown;
