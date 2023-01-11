import IngredientCard, { IngredientCardSchema } from "../IngredientCard/IngredientCard"
import styles from "./IngredientsList.module.scss"

interface IngredientListSchema {
    cards: IngredientCardSchema[]
}

export default function IngredientsList ({
    cards
} : IngredientListSchema) {
    return (
        <div className={styles.ingredients}>
            <h2>Ingredients:</h2>
            <div className={styles['list-container']}>
                {
                    cards.map(card => (
                        <IngredientCard
                            description={card.description}
                            quantity={card.quantity}
                        />
                    ))
                }
            </div>
        </div>
    )
}