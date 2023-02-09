import { GetServerSideProps } from "next";
import withAuth from "../../src/components/HOCs/withAuth";
import IngredientsList from "../../src/components/organisms/IngredientsList/IngredientsList";
import PreparationSection from "../../src/components/organisms/PreparationSection/PreparationSection";
import RecipeHead from "../../src/components/organisms/RecipeHead/RecipeHead";
import { getRecipe } from "../../src/services/recipes";
import { Recipe } from "../../src/types";

interface Props {
    recipe: Recipe
}

export function RecipeDetails ({ recipe } : Props) {
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

export default withAuth<Props>(RecipeDetails)

export const getServerSideProps : GetServerSideProps = async (context) => {
    const recipeId = context.query.id
    const recipe = await getRecipe(Number(recipeId))
    return {
      props: {
        recipe: recipe?.data
      }
    }
}