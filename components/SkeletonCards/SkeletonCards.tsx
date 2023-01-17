import styles from './SkeletonCards.module.scss'

interface Props {
    quantity: number
}

export default function SkeletonCards ({
    quantity
} : Props) {
    return (
        <div className={styles['skeleton-cards']} role="progressbar">
            {(new Array(quantity)).fill({}).map((_, index) => (
                <div key={`skeleton_${index}`} className={styles.card}>
                    <span>Loading</span>
                </div>
            ))}
        </div>
    )
}