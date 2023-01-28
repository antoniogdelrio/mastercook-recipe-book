import { useRef } from "react"
import Button from "../../atoms/Button/Button"
import SearchIcon from "../../icons/SearchIcon"
import TextInput from "../../atoms/TextInput/TextInput"
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
            <Button onClick={handleSearch}>Search</Button>
        </div>
    )
}