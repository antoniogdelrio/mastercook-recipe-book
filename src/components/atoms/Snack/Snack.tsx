import { useContext, useEffect, useState } from "react"
import { GeneralContext, SnackBarType } from "../../../contexts/GeneralContext"
import styles from "./Snack.module.scss"

interface Props {
    data: SnackBarType | null
}

export default function Snack ({
    data
} : Props) {
    const { showSnack } = useContext(GeneralContext)
    const [isVisible, setIsVisible] = useState<boolean>(Boolean(data))

    useEffect(() => {
        if (data) {
            setTimeout(() => {
                setIsVisible(false)
                showSnack(null)
            }, 8000)
        }
    }, [isVisible])

    if (isVisible && data) {
        return (
            <div className={styles[`snack__${data?.color}`]} role="alert" aria-label={data.description}>
                <p className={styles['snack__title']}>{data.title}</p>
                <p className={styles['snack__description']}>{data.description}</p>
            </div>
        )
    }
    return <></>
}