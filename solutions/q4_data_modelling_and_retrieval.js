// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const listOfFruits = [
    { name: 'Apple', color: 'red', pricePerKg: 23.5 },
    { name: 'Mango', color: 'green', pricePerKg: 45.2 },
    { name: 'Banana', color: 'yellow', pricePerKg: 98.2 },
    { name: 'Orange', color: 'orange', pricePerKg: 0.5 },
    { name: 'Berry', color: 'cherry', pricePerKg: 78.25 }
];

const getFruitProperties = (fruitName) => {
    return listOfFruits.filter(element => element.name.toLowerCase() === fruitName.toLowerCase());
};

const addFruitProperties = (fname, fcolor, fprice) => {
    let fruitObj = {
        name: fname, color: fcolor, pricePerKg: fprice
    };
    let finalFruitarray = listOfFruits.concat(fruitObj);
    return finalFruitarray;
};

const updateFruitProperties = (fname, fcolor, fprice) => {
    let index;
    let found = listOfFruits.find(function(element, position) {
        if(element.name.toLowerCase() === fname.toLowerCase()) {
            index = position;
        }
        return element.name.toLowerCase() === fname.toLowerCase();
    });
    let fruitObj = {
        name: fname, color: fcolor, pricePerKg: fprice
    };
    if(index !== -1 && found) {
        listOfFruits.splice(index, 1);
        return listOfFruits.concat(fruitObj);
    }
    return listOfFruits;
};

module.exports = {
    getFruitProperties,
    addFruitProperties,
    updateFruitProperties
};
