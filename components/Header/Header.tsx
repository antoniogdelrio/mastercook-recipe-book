import Image from 'next/image'
import { BLUR_DATA_URL } from '../../constants/general'
import styles from "./Header.module.scss"

export default function Header () {
    return (
        <header className={styles.header}>
            <Image
                src="/logo.svg"
                alt="Mastercook Logo"
                width={375}
                height={100}
                blurDataURL={BLUR_DATA_URL}
                placeholder="blur"
            />
        </header>
    )
}