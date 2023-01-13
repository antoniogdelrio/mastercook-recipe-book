import { Ingredient } from "../../types"
import IngredientCard from "../IngredientCard/IngredientCard"
import styles from "./IngredientsList.module.scss"

interface Props {
    cards: Ingredient[]
}

export default function IngredientsList ({
    cards
} : Props) {
    return (
        <div className={styles.ingredients}>
            <h2>Ingredients:</h2>
            <div className={styles['list-container']}>
                {
                    cards.map(card => (
                        <IngredientCard
                            description={card.description}
                            quantity={card.quantity}
                            unit={card.unit}
                        />
                    ))
                }
            </div>
        </div>
    )
}