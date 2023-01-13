import styles from "./Pagination.module.scss"

interface Props {
    goPreviousPage: () => void,
    goNextPage: () => void,
    currentPage: number,
    pageSize: number,
    totalItems: number
}

export default function Pagination({
    goPreviousPage,
    goNextPage,
    currentPage,
    pageSize,
    totalItems
} : Props) {
    const showNextButton = pageSize * currentPage < totalItems

    return (
        <div className={styles.pagination}>
            { currentPage > 1 && <button onClick={goPreviousPage}>&lt; Previous Page</button> }
            { showNextButton && <button onClick={goNextPage}>Next Page &gt;</button>}
        </div>
    )
}
