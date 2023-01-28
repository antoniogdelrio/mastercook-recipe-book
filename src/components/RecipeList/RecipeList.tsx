import { RecipeSummary } from "../../types"
import RecipeCard from "../RecipeCard/RecipeCard"
import Typography from "../Typography/Typography"
import styles from "./RecipeList.module.scss"

interface Props {
    cards: RecipeSummary[]
}

export default function RecipeList(props: Props) {
    return (
        <div className={styles['list-container']}>
            {props.cards.length ?
                props.cards?.map(card => (
                    <RecipeCard
                        key={`recipe_${card.id}`}
                        id={card.id}
                        title={card.title}
                        image={`/${card.image}`}
                        difficulty={card.difficulty}
                        time={card.time}
                    />
                )):
                <Typography value="Not recipes to show" />
            }
        </div>
    )
}