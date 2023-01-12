import { useRef } from "react"
import SearchIcon from "../icons/SearchIcon"
import styles from "./SearchBar.module.scss"

interface SearchBarSchema {
    onSearch: (payload: string) => void
}

export default function SearchBar ({
    onSearch
} : SearchBarSchema) {
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
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}