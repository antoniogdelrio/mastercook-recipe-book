import Image from 'next/image'
import styles from "./Header.module.css"

export default function Header () {
    return (
        <header className={styles.header}>
            <Image
                src="/logo.svg"
                alt="Mastercook Logo"
                width={375}
                height={100}
            />
        </header>
    )
}