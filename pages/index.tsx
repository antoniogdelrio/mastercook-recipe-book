import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import RecipeList from "../components/RecipeList/RecipeList";
import SearchBar from "../components/SearchBar/SearchBar";
import SkeletonCards from "../components/SkeletonCards/SkeletonCards";
import { RECIPES_URL } from "../constants/apiUrls";
import useRecipes from "../hooks/useRecipes";
import { getRecipes } from "../services/recipes";
import { RecipeSummary } from "../types";

interface HomeProps {
  recipes: RecipeSummary[],
  totalItems: number,
  queryPage: number,
  querySearch: string
}

export default function Home({ recipes, queryPage, querySearch } : HomeProps) {

  const {
    data: paginatedRecipes,
    isLoading,
    currentPage,
    onChangePage,
    onSearch
  } = useRecipes(Number(queryPage), querySearch, {
    data: recipes, totalItems: 50
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
