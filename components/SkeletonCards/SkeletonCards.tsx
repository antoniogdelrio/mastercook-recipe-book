import styles from './SkeletonCards.module.scss'

interface SkeletonCardsProps {
    quantity: number
}

export default function SkeletonCards ({
    quantity
} : SkeletonCardsProps) {
    return (
        <div className={styles['skeleton-cards']}>
            {(new Array(quantity)).fill({}).map(() => (
                <div className={styles.card}></div>
            ))}
        </div>
    )
}