import { createContext, useState } from "react";
import Snack from "../../components/atoms/Snack/Snack";

interface SnackBar {
    title: string,
    description: string,
    color: string
}

export type SnackBarType = SnackBar | null

interface GeneralContextTypes {
    showSnack: (snackItem: SnackBarType) => void,
    // setLoader: (set: boolean) => void
}

export const GeneralContext = createContext({} as GeneralContextTypes)

export default function GeneralContextProvider ({
    children
} : React.PropsWithChildren) {
    // const [isLoading, setIsLoading] = useState(false)
    const [snackInfo, setSnackInfo] = useState<SnackBarType>(null)

    // const setLoader = (set: boolean) => {
    //     setIsLoading(set)
    // }

    const showSnack = (snackItem: SnackBarType) => {
        setSnackInfo(snackItem || null)
    }

    return (
        <GeneralContext.Provider value={{
            showSnack,
            // setLoader
        }}>
            <>
                { children }
                {/* { isLoading && <Loader /> } */}
                { <Snack key={`snack_${JSON.stringify(snackInfo)}`} data={snackInfo} /> }
            </>
        </GeneralContext.Provider>
    )

}