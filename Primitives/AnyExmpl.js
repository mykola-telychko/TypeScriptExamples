function debug(value) {
    console.log('debug::', value);
}
debug("a string");
debug(23);
debug({ color: "blue" });
function swap(x) {
    return [x[1], x[0]];
}
var pair = [42, "hello"];
var swappedPair = swap(pair);
console.log('swappedPair::', swappedPair);
function processValue(value) {
    if (typeof value === "string") {
        console.log("Value is a string:", value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log("Value is a number:", value.toFixed(2));
    }
    else {
        console.log("Value is of unknown type:", value);
    }
}
processValue("hello");
processValue(42);
processValue({});
