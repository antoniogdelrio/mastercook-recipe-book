import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../src/components/organisms/Header/Header";
import Pagination from "../src/components/molecules/Pagination/Pagination";
import RecipeList from "../src/components/organisms/RecipeList/RecipeList";
import SearchBar from "../src/components/molecules/SearchBar/SearchBar";
import SkeletonCards from "../src/components/SkeletonCards/SkeletonCards";
import { RECIPES_URL } from "../src/constants/apiUrls";
import useRecipes from "../src/hooks/useRecipes";
import { getRecipes } from "../src/services/recipes";
import { RecipeSummary } from "../src/types";

interface HomeProps {
  serverData: {
    data: RecipeSummary[],
    totalItems: number
  },
  queryPage: number,
  querySearch: string
}

export default function Home({ serverData, queryPage, querySearch } : HomeProps) {

  const {
    data: paginatedRecipes,
    isLoading,
    currentPage,
    onChangePage,
    onSearch
  } = useRecipes(Number(queryPage), querySearch, {
    data: serverData.data, totalItems: serverData.totalItems
  })

  const cards = paginatedRecipes?.data || []

  const totalItems = paginatedRecipes?.totalItems || 0

  return (
    <>
      <Header/>
      <SearchBar onSearch={onSearch} />
      {
        isLoading ?
        <SkeletonCards quantity={9} /> :
        <RecipeList cards={cards} />
      }
      <Pagination
        goNextPage={onChangePage(+1)}
        goPreviousPage={onChangePage(-1)}
        currentPage={currentPage}
        pageSize={9}
        totalItems={totalItems}
      />
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async (context) =>  {
  const queryPage = Number(context.query.page) || 1
  const querySearch = (context.query.search || '') as string
  const serverData = await getRecipes(queryPage, querySearch)
  
  return {
    props: {
      serverData,
      queryPage,
      querySearch
    }
  }
}
