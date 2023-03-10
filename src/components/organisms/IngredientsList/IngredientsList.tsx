import { Ingredient } from "../../../types"
import IngredientCard from "../../molecules/IngredientCard/IngredientCard"
import Typography from "../../atoms/Typography/Typography"
import styles from "./IngredientsList.module.scss"

interface Props {
    cards: Ingredient[]
}

export default function IngredientsList ({
    cards
} : Props) {
    return (
        <div className={styles.ingredients}>
            <Typography value="Ingredients:" type="h2" />
            <div className={styles['list-container']}>
                {
                    cards.map(card => (
                        <IngredientCard
                            key={`${card.description}_${card.quantity}`}
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