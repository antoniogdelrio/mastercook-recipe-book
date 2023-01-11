import styles from "./PreparationSection.module.scss"

interface PreparationSection {
    steps: string[]
}

export default function PreparationSection ({ steps } : PreparationSection) {
    return (
        <div className={styles['preparation-section']}>
            <h2>Preparation:</h2>
            <ol className={styles.steps}>
                {
                    steps.map(step => (
                        <li>{step}</li>
                        ))
                    }
            </ol>
        </div>
    )
}