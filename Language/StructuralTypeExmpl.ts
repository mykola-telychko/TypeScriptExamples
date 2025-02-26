/**
 * TypeScript uses a structural type system, meaning types are compatible 
 * based on their structure, not explicit declarations.
 */

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };
  
  sphere = ball; 
  ball = sphere; 
  
  /**
   * Extra properties prevent assignment if not accounted for.
   */
  
  interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  
  tube = ball; //  Error: Missing 'length'
  ball = tube; // Compatible: 'Tube' has all properties of 'Ball'
  
  /**
   * Functions are also structurally compared. Extra parameters can be ignored, 
   * but missing ones cause an error.
   */
  
  let createBall = (diameter: number) => ({ diameter });
  let createSphere = (diameter: number, useInches: boolean) => ({
    diameter: useInches ? diameter * 0.39 : diameter,
  });
  
  createSphere = createBall; //  Extra param ignored
  createBall = createSphere; //  Error: Missing 'useInches'
  
  /**
   * Function parameters can be omitted if unused, as seen in array forEach.
   */
  [createBall(1), createBall(2)].forEach((ball) => console.log(ball));
  
  /**
   * Return types follow structural rules. Missing properties prevent assignment.
   */
  let createRedBall = (diameter: number) => ({ diameter, color: "red" });
  
  createBall = createRedBall; //  Compatible: 'diameter' exists
  createRedBall = createBall; //  Error: Missing 'color'
  