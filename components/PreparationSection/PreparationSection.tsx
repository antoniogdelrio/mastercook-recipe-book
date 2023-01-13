import styles from "./PreparationSection.module.scss"

interface Props {
    steps: string[]
}

export default function PreparationSection ({ steps } : Props) {
    return (
        <div className={styles['preparation-section']}>
            <h2>Preparation:</h2>
            <ol className={styles.steps}>
                {
                    steps.map((step, index) => (
                        <li key={`${index}_${step}`}>{step}</li>
                        ))
                    }
            </ol>
        </div>
    )
}