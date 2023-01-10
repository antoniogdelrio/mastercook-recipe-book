import IngredientCard from "../../components/IngredientCard/IngredientCard";
import IngredientsList from "../../components/IngredientsList/IngredientsList";
import PreparationSection from "../../components/PreparationSection/PreparationSection";
import RecipeHead from "../../components/RecipeHead/RecipeHead";

export default function RecipeDetails () {
    return (
        <article>
            <RecipeHead
                difficulty="Hard"
                time={5}
                title="Temaki saboroso"
                image="/temaki.jpg"
                serveQuantity={5}
            />
            <IngredientsList
                cards={[
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                    {
                        quantity: "1 kg",
                        description: "Ketchup"
                    },
                ]}
            />
            <PreparationSection
                steps={[
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quas autem vitae quo optio at nostrum aspernatur sed? Architecto ducimus fuga illum dolor maiores fugit dignissimos blanditiis sapiente dolores nostrum?",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui eos amet in accusamus? Aut ea animi harum accusamus porro atque vel eum! Est repellat soluta numquam earum minima dicta.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui eos amet in accusamus? Aut ea animi harum accusamus porro atque vel eum! Est repellat soluta numquam earum minima dicta.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui eos amet in accusamus? Aut ea animi harum accusamus porro atque vel eum! Est repellat soluta numquam earum minima dicta.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui eos amet in accusamus? Aut ea animi harum accusamus porro atque vel eum! Est repellat soluta numquam earum minima dicta.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui eos amet in accusamus? Aut ea animi harum accusamus porro atque vel eum! Est repellat soluta numquam earum minima dicta."
                ]}
            />
        </article>
    )
}