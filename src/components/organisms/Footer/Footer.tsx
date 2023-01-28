import Link from "next/link"
import Typography from "../../atoms/Typography/Typography"
import styles from "./Footer.module.scss"

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <Typography value="Created by" type="h4" customClasses={styles['footer-text']} />&nbsp;
            <Link href="https://github.com/antoniogdelrio/" rel="noreferrer" target="_blank">antoniogdelrio</Link>
        </footer>
    )
}
