import styles from "./IngredientCard.module.css"

export interface IngredientCardSchema {
    quantity: string,
    description: string
}

export default function IngredientCard ({
    quantity,
    description
} : IngredientCardSchema) {
    return (
        <div className={styles.card}>
            <div className={styles.quantity}>
                {quantity}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}