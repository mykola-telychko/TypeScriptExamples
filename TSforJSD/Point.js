/**
 * Logs the x and y coordinates of a given point.
 * @param {Point} p - The point to log.
 */
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
function setPoint(p) {
    return { abscissa: p.x, ordinate: p.y };
}
// Creating a point object
var point = { x: 12, y: 26 };
// Logs "12, 26"
logPoint(point);
var point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
var pointXY = { x: 12, y: 26 };
console.log('setPoint::', setPoint(pointXY));
// const color = { hex: "#187ABF" };
// logPoint(color); // error
// --------------------------------------------- 
var VirtualPoint = /** @class */ (function () {
    /**
     * Creates a new VirtualPoint instance.
     * @param {number} x - The x-coordinate of the point.
     * @param {number} y - The y-coordinate of the point.
     */
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
// Creating an instance of VirtualPoint
var newVPoint = new VirtualPoint(13, 56);
console.log('new VirtualPoint::');
// Logs "13, 56" using the logPoint function
logPoint(newVPoint);
