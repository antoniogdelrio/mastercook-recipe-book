import { Recipe, RecipeSummary } from "../../types";

export const RecipeMock: Recipe = {
    id: 1,
    title: "Chicken",
    image: "chicken.jpg",
    time: 65,
    difficulty: "Medium",
    ingredients: [
        {
            description: "Ketchup",
            quantity: 100,
            unit: "g"
        },
        {
            description: "Mustard",
            quantity: 250,
            unit: "units"
        }
    ],
    steps: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe fugiat eius earum, placeat repellat soluta tenetur fuga, provident, ut laboriosam incidunt mollitia perspiciatis? Debitis voluptatum fugit nesciunt asperiores incidunt.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo et assumenda quod quaerat error, ut, nulla autem cum exercitationem soluta ea. Ducimus itaque sint minus dolorem, optio ipsam corrupti!"
    ],
    serve: 6
}

export const RecipesMock = {
    page1: [
        {
            id: 1,
            title: "Chicken",
            image: "chicken.jpg",
            time: 65,
            difficulty: "Medium",
        },
        {
            id: 2,
            title: "Chocolate Cake",
            image: "photo.jpg",
            time: 75,
            difficulty: "Medium"
        },
        {
            id: 3,
            title: "Food 3",
            image: "photo.jpg",
            time: 65,
            difficulty: "Medium",
        },
        {
            id: 4,
            title: "Food 4",
            image: "photo.jpg",
            time: 75,
            difficulty: "Medium"
        },
        {
            id: 5,
            title: "Food 5",
            image: "photo.jpg",
            time: 65,
            difficulty: "Medium",
        },
        {
            id: 6,
            title: "Food 6",
            image: "photo.jpg",
            time: 75,
            difficulty: "Medium"
        },
        {
            id: 7,
            title: "Food 7",
            image: "photo.jpg",
            time: 65,
            difficulty: "Medium",
        },
        {
            id: 8,
            title: "Food 8",
            image: "photo.jpg",
            time: 75,
            difficulty: "Medium"
        },
        {
            id: 9,
            title: "Food 9",
            image: "photo.jpg",
            time: 65,
            difficulty: "Medium",
        },
    ],
    page2: [
        {
            id: 10,
            title: "Food 10",
            image: "photo.jpg",
            time: 75,
            difficulty: "Medium"
        },
        {
            id: 11,
            title: "Apple pie",
            image: "apple-pie.jpg",
            time: 75,
            difficulty: "Easy"
        },
    ]
}