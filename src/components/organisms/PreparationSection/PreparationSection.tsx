import Typography from "../../atoms/Typography/Typography"
import styles from "./PreparationSection.module.scss"

interface Props {
    steps: string[]
}

export default function PreparationSection ({ steps } : Props) {
    return (
        <div className={styles['preparation-section']}>
            <Typography value="Preparation:" type="h2" />
            <ol className={styles.steps}>
                {
                    steps.map((step, index) => (
                        <li key={`${index}_${step}`}><Typography value={step} type="span" /></li>
                    ))
                    }
            </ol>
        </div>
    )
}