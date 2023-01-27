import { useRef } from "react"
import SearchIcon from "../icons/SearchIcon"
import styles from "./SearchBar.module.scss"

interface Props {
    onSearch: (payload: string) => void
}

export default function SearchBar ({
    onSearch
} : Props) {
    const ref = useRef<HTMLInputElement>(null)

    const handleSearch = () => {
        onSearch(String(ref.current?.value))
    }

    return (
        <div className={styles.search}>
            <SearchIcon />
            <input
                ref={ref}
                type="text"
                alt="Search recipes"
                aria-label="Search recipes"
            />
            <button onClick={handleSearch}
            >Search</button>
        </div>
    )
}