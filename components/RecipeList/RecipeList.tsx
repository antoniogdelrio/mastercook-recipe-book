import RecipeCard, { RecipeCardSchema } from "../RecipeCard/RecipeCard"
import styles from "./RecipeList.module.scss"

interface RecipeListSchema {
    cards: RecipeCardSchema[]
}

export default function RecipeList(props: RecipeListSchema) {
    return (
        <div className={styles['list-container']}>
            {props.cards?.map(card => (
                <RecipeCard
                    key={`recipe_${card.id}`}
                    id={card.id}
                    title={card.title}
                    image={`/${card.image}`}
                    difficulty={card.difficulty}
                    time={card.time}
                />
            ))}
        </div>
    )
}