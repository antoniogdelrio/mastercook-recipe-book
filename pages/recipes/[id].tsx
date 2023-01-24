import { GetServerSideProps } from "next";
import IngredientsList from "../../components/IngredientsList/IngredientsList";
import PreparationSection from "../../components/PreparationSection/PreparationSection";
import RecipeHead from "../../components/RecipeHead/RecipeHead";
import { getRecipe } from "../../services/recipes";
import { Recipe } from "../../types";

interface Props {
    recipe: Recipe
}

export default function RecipeDetails ({ recipe } : Props) {
    return (
        <article>
            <RecipeHead
                difficulty={recipe.difficulty}
                time={recipe.time}
                title={recipe.title}
                image={`/${recipe.image}`}
                serveQuantity={recipe.serve}
            />
            <IngredientsList
                cards={recipe.ingredients}
            />
            <PreparationSection
                steps={recipe.steps}
            />
        </article>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
    const recipeId = context.query.id
    const recipe = await getRecipe(Number(recipeId))
    return {
      props: {
        recipe: recipe?.data
      }
    }
}