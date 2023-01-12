import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import { RecipeCardSchema } from "../components/RecipeCard/RecipeCard";
import RecipeList from "../components/RecipeList/RecipeList";
import SearchBar from "../components/SearchBar/SearchBar";
import SkeletonCards from "../components/SkeletonCards/SkeletonCards";
import { RECIPES_URL } from "../constants/apiUrls";
import useRecipes from "../hooks/useRecipes";
import { getRecipes } from "../services/recipes";

interface HomeProps {
  recipes: RecipeCardSchema[],
  totalItems: number,
  queryPage: number,
  querySearch: string
}

export default function Home({ recipes, queryPage, querySearch } : HomeProps) {
  const [page, setPage] = useState(queryPage)
  const [searchPayload, setSearchPayload] = useState(querySearch)
  const router = useRouter()

  const { data: paginatedRecipes, isLoading } = useRecipes(Number(page), searchPayload, {
    data: recipes, totalItems: 50
  })

  const handleChangePage = (delta : number) => () => {
    const newPage : number = Number(page) + delta
    setPage(newPage)
    router.query.page = `${newPage}`
    router.push(router, undefined, {
      scroll: false
    })
  }

  const handleSearch = (payload : string) => {
    setSearchPayload(payload)
    setPage(1)
    router.query.search = payload
    router.push(router, undefined, {
      scroll: false
    })
  }

  const cards = paginatedRecipes?.data || []

  const totalItems = paginatedRecipes?.totalItems || 0

  return (
    <>
      <Header/>
      <SearchBar onSearch={handleSearch} />
      {
        isLoading ?
        <SkeletonCards quantity={9} /> :
        <RecipeList cards={cards} />
      }
      <Pagination
        goNextPage={handleChangePage(+1)}
        goPreviousPage={handleChangePage(-1)}
        currentPage={page}
        pageSize={9}
        totalItems={totalItems}
      />
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async (context) =>  {
  const queryPage = Number(context.query.page) || 1
  const querySearch = (context.query.search || '') as string
  const { data } = await getRecipes(queryPage, querySearch)
  const recipes = data
  return {
    props: {
      recipes,
      queryPage,
      querySearch
    }
  }
}
