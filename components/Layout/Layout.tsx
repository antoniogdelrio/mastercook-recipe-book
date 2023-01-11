import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"

interface LayoutProps {
    children?: ReactNode
}

export default function Layout ({children} : LayoutProps) {
    return (
        <>
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}
