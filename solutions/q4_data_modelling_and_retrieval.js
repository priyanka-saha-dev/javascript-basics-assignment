// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

var listOfFruits = [
    {name : "Apple", color : "red", pricePerKg : 23.5}, 
    {name : "Mango", color : "green", pricePerKg : 45.2}, 
    {name : "Banana", color : "yellow", pricePerKg : 98.2}, 
    {name : "Orange", color : "orange", pricePerKg : 0.5}, 
    {name : "Berry", color : "cherry", pricePerKg : 78.25}
]

const convertList = () => {
    var keyField = 'name';
    return listOfFruits.reduce((acc, item) => {
        acc[item[keyField].toLowerCase()] = item;
        return acc;
    }, {});
}

const fetchFruitProperties = (fruitName) => {
    return (fruitName !== undefined || fruitName != null) ? convertList()[fruitName.toLowerCase()] : null;
}

module.exports = fetchFruitProperties;