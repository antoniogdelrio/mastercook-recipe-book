import styles from "./Loader.module.scss"

export default function Loader () {
    return (
        <div className={styles.loader} role="progressbar">
            <div className={styles['loader__dots']}></div>
        </div>
    )
}