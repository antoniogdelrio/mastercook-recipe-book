import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"

interface Props {
    children?: ReactNode
}

export default function Layout ({children} : Props) {
    return (
        <>
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}
