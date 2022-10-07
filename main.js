
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify

    /*This for loop is going to iterate through the flowers array in order to access the price property and
    then a conditional statement to compare the price properties in each object.
    */
    for (const flower of flowers) {
        if (flower.price < 2) {
            filteredFlowers.push(flower)
        }
    }

    return filteredFlowers  // Do not modify

}



/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify


    /*This for loop will iterate through the flowers array in order to access the usdaZones property. This will
    isolate each flower that grows in both zones instead of one.
    */
    for (const flower of flowers) {
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8))
            filteredFlowers.push(flower)
    }



    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify



    /* This for loop will run through the flowers array to find and isolate the objects whose color property
    is orange*/
    for (const flower of flowers) {
        if (flower.colors.includes("Orange"))
            filteredFlowers.push(flower)
    }



    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify

    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */

    /*This is an attempt at a for loop which will iterate through each object in order to add the corresponding 
    HTML elements to each property within those objects. Flower was used as the variable in each of the loops at first and it created way more elements than it was
    supposed to. By nesting these color and zone loops, those properties were able to sync with the corresponding flowers.type property. By nesting the last two for loops,
    the colors and usdaZones properties were contained within their objects.
    */

    for (const flower of flowers) {
        flowersHTMLString += `<article> <h1>${flower.type}</h1> ` //This provides an article element with each object in flowers.
       //The for loop below isolated the colors property of flowers and looped through them specifically.
        for (const color of flower.colors) {
            flowersHTMLString += `<h2>Colors</h2> <section>${color}</section> `
        }
        //This for loop did the same operation as the one above, but with the usdaZones property instead.
        for (const zone of flower.usdaZones) {
            flowersHTMLString += `<h2>USDA Zones</h2> <div>${zone}</div> `
        }
        flowersHTMLString += '</article>'
    }

        return flowersHTMLString  // Do not modify
}

console.log(flowersAsHTML())












































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

