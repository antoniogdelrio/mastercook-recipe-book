import { forwardRef } from "react"
import styles from "./TextInput.module.scss"

interface Props {
    alt: string,
    ariaLabel: string,
    placeholder?: string
}

export default forwardRef<HTMLInputElement, Props>(function TextInput (props, ref) {
    return (
        <input
            className={styles.input}
            ref={ref}
            type="text"
            alt={props.alt}
            aria-label={props.ariaLabel}
            placeholder={props.placeholder}
        />
    )
})