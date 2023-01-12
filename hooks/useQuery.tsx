import { useRouter } from "next/router";

export default function useUrlQuery (key: string, scroll: boolean = false) {
    const router = useRouter()

    const getValue = () => (router.query[key])

    const setValue = (payload : string) => {
        router.query[key] = `${payload}`
        router.push(router, undefined, {
          scroll
        })
    }

    return [
        getValue,
        setValue
    ]
}
