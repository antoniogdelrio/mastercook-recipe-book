import styles from "./Button.module.scss"

interface Props {
    onClick: () => void,
    children: JSX.Element | string
}

export default function Button ({
    onClick,
    children
} : Props) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}