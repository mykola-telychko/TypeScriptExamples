function debug(value: any): void {
    console.log('debug::', value);
}

debug("a string"); 
debug(23);         
debug({ color: "blue" }); 

function swap(x: [number, string]): [string, number] {
    return [x[1], x[0]];
}

const pair: [any, any] = [42, "hello"];
const swappedPair = swap(pair as [number, string]); 

console.log('swappedPair::', swappedPair); 

function processValue(value: unknown): void {
    if (typeof value === "string") {
        console.log("Value is a string:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Value is a number:", value.toFixed(2));
    } else {
        console.log("Value is of unknown type:", value);
    }
}

processValue("hello"); 
processValue(42);      
processValue({});      