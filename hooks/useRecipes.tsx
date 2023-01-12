import { useQuery } from "@tanstack/react-query";
import { RECIPES_KEY } from "../constants/queryKeys";
import { getRecipes } from "../services/recipes";

export default function useRecipes (page : number, searchPayload: string, initialData: any) {
    const { data, isLoading } = useQuery({
        queryKey: [RECIPES_KEY, page, searchPayload],
        queryFn: async () => {
            const data = await getRecipes(page, searchPayload)
            return data
        },
        initialData
    })
    return {
        data, isLoading
    }
}