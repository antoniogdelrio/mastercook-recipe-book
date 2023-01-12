import { useQuery } from "@tanstack/react-query";
import { RECIPES_KEY } from "../constants/queryKeys";
import { getRecipes } from "../services/recipes";
import useFetchData from "./useFetchData";

export default function useRecipes (page : number, search: string, initialData: any) {
    const queryFn : ({ queryKey : [] }) => any = async ({ queryKey }) => {
        const data = await getRecipes(queryKey[1], queryKey[2])
        return data
    }

    const data = useFetchData({
        queryFn,
        key: RECIPES_KEY,
        initialData,
        page,
        search
    })

    return data
}