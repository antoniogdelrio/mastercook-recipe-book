import { Recipe } from "../../types";

export const RecipeMock : Recipe = {
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