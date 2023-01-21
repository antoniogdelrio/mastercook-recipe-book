import { QueryKey, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import useUrlQuery from "./useUrlQuery"

interface useFetchDataTypes<T> {
    queryFn: ({ queryKey : [] }) => any,
    key: string,
    page: number,
    search: string,
    initialData: T
}

export default function useFetchData <T> ({ queryFn, key, page, search, initialData } : useFetchDataTypes<T>) {
    const [currentPage, setCurrentPage] = useState(page)
    const [, setUrlPage] = useUrlQuery('page')
    const [searchQuery, setSearchQuery] = useState(search)
    const [, setUrlSearch] = useUrlQuery('q')

    const { data, isLoading } = useQuery({
        queryKey: [key, currentPage, searchQuery],
        queryFn,
        initialData
    })

    const onChangePage = (delta : number) => () => {
      const newPage : number = Number(page) + delta
      setCurrentPage(newPage)
      setUrlPage(`${newPage}`)
    }

    const onSearch = (payload : string) => {
      setUrlSearch(payload)
      setSearchQuery(payload)
      setCurrentPage(1)
    }

    return {
        data, isLoading, currentPage, onChangePage, searchQuery, onSearch
    }
}