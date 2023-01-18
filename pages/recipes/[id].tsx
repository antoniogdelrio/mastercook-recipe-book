import { GetServerSideProps } from "next";
import IngredientsList from "../../components/IngredientsList/IngredientsList";
import PreparationSection from "../../components/PreparationSection/PreparationSection";
import RecipeHead from "../../components/RecipeHead/RecipeHead";
import { getRecipe } from "../../services/recipes";
import { Recipe } from "../../types";

interface Props {
    data: Recipe
}

export default function RecipeDetails (recipe : Props) {
    const { data } = recipe
    return (
        <article>
            <RecipeHead
                difficulty={data.difficulty}
                time={data.time}
                title={data.title}
                image={`/${data.image}`}
                serveQuantity={data.serve}
            />
            <IngredientsList
                cards={data.ingredients}
            />
            <PreparationSection
                steps={data.steps}
            />
        </article>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
    const recipeId = context.query.id
    const recipe = await getRecipe(Number(recipeId))
    return {
      props: {
        recipe
      }
    }
}