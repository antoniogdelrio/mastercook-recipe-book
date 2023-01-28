import { useRef } from "react"
import SearchIcon from "../icons/SearchIcon"
import TextInput from "../TextInput/TextInput"
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
            <TextInput
                ref={ref}
                alt="Search recipes"
                ariaLabel="Search recipes"
            />
            <button onClick={handleSearch}
            >Search</button>
        </div>
    )
}