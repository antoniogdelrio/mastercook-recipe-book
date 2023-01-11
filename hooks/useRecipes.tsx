import { useQuery } from "@tanstack/react-query";
import { RECIPES_URL } from "../constants/apiUrls";
import { RECIPES_KEY } from "../constants/queryKeys";

export default function useRecipes (page : number, enabled: boolean) {
    const { data, isLoading } = useQuery({
        queryKey: [RECIPES_KEY, page],
        queryFn: async () => {
            const res = await fetch(`${RECIPES_URL}?_page=${page}&_limit=9`)
            return res.json()
        },
        enabled
    })

    return {
        data, isLoading: isLoading && enabled
    }
}