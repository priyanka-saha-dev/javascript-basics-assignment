// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const listOfFruits = [
    { name: "Apple", color: "red", pricePerKg: 23.5 },
    { name: "Mango", color: "green", pricePerKg: 45.2 },
    { name: "Banana", color: "yellow", pricePerKg: 98.2 },
    { name: "Orange", color: "orange", pricePerKg: 0.5 },
    { name: "Berry", color: "cherry", pricePerKg: 78.25 }
]

const getFruitProperties = (fruitName) => {
    return listOfFruits.filter(element => element.name.toLowerCase() === fruitName.toLowerCase());
}

const addFruitProperties = (fname, fcolor, fprice) => {
    let fruitObj = {
        name: fname, color: fcolor, pricePerKg: fprice
    };
    let finalFruitarray = listOfFruits.concat(fruitObj);
    return finalFruitarray;
}

const updateFruitProperties = (fname, fcolor, fprice) => {
    
    let index;
    console.log("Actual item");
    console.log(listOfFruits);

    if(index !== -1) {
        
        console.log("item to be deleted");
        var found = listOfFruits.find(function(element, position) {
            if(element.name.toLowerCase() === fname.toLowerCase()) {
                index = position;
            }

            return element.name.toLowerCase() === fname.toLowerCase();
        });

        console.log("index = " + index);
        console.log(found);
        
        let deletedItem = listOfFruits.splice(index, 1);

        console.log("After delete");
        console.log(deletedItem);

        // let fruitObj = {
        //     name: fname, color: fcolor, pricePerKg: fprice
        // };
        // let finalFruitarray = deletedItem.concat(fruitObj);

        // return finalFruitarray;
    } else {
        console.log("not found");
    }

    return listOfFruits;
}

const getFruitPropertiesByName = (fruitName) => {
    let filterElement = listOfFruits.filter(element => element.name.toLowerCase() === fruitName.toLowerCase());

    return listOfFruits.indexOf(filterElement[0]);
}

module.exports = {
    getFruitProperties,
    addFruitProperties,
    updateFruitProperties
};