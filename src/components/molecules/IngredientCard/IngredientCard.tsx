import { Ingredient } from "../../../types"
import Typography from "../../atoms/Typography/Typography"
import styles from "./IngredientCard.module.scss"

export default function IngredientCard ({
    quantity,
    description,
    unit
} : Ingredient) {
    return (
        <div className={styles.card}>
            <div className={styles.quantity}>
                <Typography value={`${quantity} ${unit}`} isBold={true} />
            </div>
            <div className={styles.description}>
                <Typography value={description} />
            </div>
        </div>
    )
}