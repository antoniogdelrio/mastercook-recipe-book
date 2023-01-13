import { Ingredient } from "../../types"
import styles from "./IngredientCard.module.scss"

export default function IngredientCard ({
    quantity,
    description,
    unit
} : Ingredient) {
    return (
        <div className={styles.card}>
            <div className={styles.quantity}>
                {quantity} {unit}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}