import { RECIPES_URL } from "../constants/apiUrls"

export async function getRecipes (page : number, q : string) {
    const res = await fetch(`${RECIPES_URL}?_page=${page}&_limit=9${q && `&q=${q}`}`)
    const json = await res.json()
    const totalItems = res.headers.get('X-Total-Count')
    return { data: json,  totalItems }
}