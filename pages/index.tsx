import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import { RecipeCardSchema } from "../components/RecipeCard/RecipeCard";
import RecipeList from "../components/RecipeList/RecipeList";
import SkeletonCards from "../components/SkeletonCards/SkeletonCards";
import { RECIPES_URL } from "../constants/apiUrls";
import useRecipes from "../hooks/useRecipes";

interface HomeProps {
  recipes: RecipeCardSchema[],
  totalItems: number,
  queryPage: number
}

export default function Home({ recipes, totalItems, queryPage } : HomeProps) {
  const [page, setPage] = useState(queryPage)
  const router = useRouter()

  const { data: paginatedRecipes, isLoading } = useRecipes(Number(page), queryPage !== page)

  const handleChangePage = (delta : number) => () => {
    const newPage : number = Number(page) + delta
    setPage(newPage)
    router.query.page = `${newPage}`
    router.push(router)
  }

  console.log(queryPage === page, queryPage, page, recipes, isLoading)

  const cards = queryPage === page ? recipes : paginatedRecipes

  return (
    <>
      <Header/>
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
  const res = await fetch(`${RECIPES_URL}?_page=${queryPage}&_limit=9`)
  const totalItems = res.headers.get('X-Total-Count')
  const recipes = await res.json()

  return {
    props: {
      recipes,
      totalItems,
      queryPage
    }
  }
}
