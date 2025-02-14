// Unknown
/**
 * Unknown is a safer alternative to any.
 * It forces type checking before usage.
 */
var jsonParserUnknown = function (jsonString) { return JSON.parse(jsonString); };
var myOtherAccount = jsonParserUnknown("{ \"name\": \"Samuel\" }");
var myUserAccount = jsonParserUnknown("{ \"name\": \"Samuel\" }");
console.log(myUserAccount.name);
/**
 * Ensures exhaustive checking in a switch statement.
 */
var Flower;
(function (Flower) {
    Flower[Flower["Rose"] = 0] = "Rose";
    Flower[Flower["Rhododendron"] = 1] = "Rhododendron";
    Flower[Flower["Violet"] = 2] = "Violet";
    Flower[Flower["Daisy"] = 3] = "Daisy";
})(Flower || (Flower = {}));
var flowerLatinName = function (flower) {
    switch (flower) {
        case Flower.Rose:
            return "Rosa rubiginosa";
        case Flower.Rhododendron:
            return "Rhododendron ferrugineum";
        case Flower.Violet:
            return "Viola reichenbachiana";
        case Flower.Daisy:
            return "Bellis perennis";
        default:
            var _exhaustiveCheck = flower;
            return _exhaustiveCheck; // Ensures all cases are handled
    }
};
// Never
/**
 * A function that never returns (always throws an error).
 */
var neverReturns = function () {
    throw new Error("Always throws, never returns");
};
// const myValue = neverReturns();
