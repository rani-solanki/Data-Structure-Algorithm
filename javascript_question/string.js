// Input : "a:1|b:2,3|c:4,5"
// Expected Output: { prod: [ { name: 'test', product: [{a:[1], b:[2,3], c:[4,5]}] } ] }

const test = "a:1|b:2,3|c:4,5";
const updatedString = test.split("|");
const products = {};

updatedString.forEach(entry => {
    const [key, valueStr] = entry.split(":");
    const values = valueStr.split(",").map(Number);
    products[key] = values;
});

const result = { prod: [{ name: 'test', product: JSON.stringify(products) }] };
console.log(result);