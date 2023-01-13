import styles from './SkeletonCards.module.scss'

interface Props {
    quantity: number
}

export default function SkeletonCards ({
    quantity
} : Props) {
    return (
        <div className={styles['skeleton-cards']}>
            {(new Array(quantity)).fill({}).map(() => (
                <div className={styles.card}></div>
            ))}
        </div>
    )
}