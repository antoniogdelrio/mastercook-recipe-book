import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "../../constants/general";
import { RecipeSummary } from "../../types";
import ClockIcon from "../icons/ClockIcon";
import PersonsIcon from "../icons/PersonsIcon";
import PuzzleIcon from "../icons/PuzzleIcon";
import styles from "./RecipeHead.module.scss"

interface Props extends RecipeSummary {
    serveQuantity: number
}

export default function RecipeHead (props : Props) {
    return (
        <div className={styles['recipe-head']}>
            <Link className={styles['back-button']} href="/">&lt; Back to home</Link>
            <Image
                src={props.image}
                alt={props.title}
                width={900}
                height={400}
                blurDataURL={BLUR_DATA_URL}
                placeholder="blur"
            />
            <h1>{props.title}</h1>
            <div className={styles.details}>
                <div className={styles['details__item']}>
                    <ClockIcon />
                    <p>{props.time} minutes</p>
                </div>
                <div className={styles['details__item']}>
                    <PuzzleIcon />
                    <p>{props.difficulty}</p>
                </div>
                <div className={styles['details__item']}>
                    <PersonsIcon />
                    <p>Serves {props.serveQuantity} people</p>
                </div>
            </div>
        </div>
    )
}