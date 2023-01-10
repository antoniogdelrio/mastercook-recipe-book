import Image from "next/image";
import ClockIcon from "../icons/ClockIcon";
import PersonsIcon from "../icons/PersonsIcon";
import PuzzleIcon from "../icons/PuzzleIcon";
import { RecipeCardSchema } from "../RecipeCard/RecipeCard";
import styles from "./RecipeHead.module.css"

interface RecipeHeadProps extends RecipeCardSchema {
    serveQuantity: number
}

export default function RecipeHead (props : RecipeHeadProps) {
    return (
        <div className={styles['recipe-head']}>
            <Image
                src={props.image}
                alt={props.title}
                width={900}
                height={400}
                blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcOHnyfwAGLAK4yvlhMQAAAABJRU5ErkJggg=="
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