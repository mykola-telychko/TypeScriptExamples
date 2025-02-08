/**
 * Represents a point in a 2D coordinate system.
 */
interface Point {
    x: number;
    y: number;
}
interface Coordinate {
    abscissa: number;
    ordinate: number;
}
  
  /**
   * Logs the x and y coordinates of a given point.
   * @param {Point} p - The point to log.
   */
  function logPoint(p: Point): void {
    console.log(`${p.x}, ${p.y}`);
  }

  function setPoint(p: Point): Coordinate {
    return { abscissa: p.x, ordinate: p.y};
  }
  
  // Creating a point object
  const point: Point = { x: 12, y: 26 };

  // Logs "12, 26"
  logPoint(point);
  
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const pointXY: Point = { x: 12, y: 26 };
console.log('setPoint::', setPoint(pointXY));
 
// const color = { hex: "#187ABF" };
// logPoint(color); // error
// --------------------------------------------- 

class VirtualPoint {
    x: number;
    y: number;
  
    /**
     * Creates a new VirtualPoint instance.
     * @param {number} x - The x-coordinate of the point.
     * @param {number} y - The y-coordinate of the point.
     */
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  
  // Creating an instance of VirtualPoint
  const newVPoint = new VirtualPoint(13, 56);
  
  console.log('new VirtualPoint::');
  
  // Logs "13, 56" using the logPoint function
  logPoint(newVPoint);