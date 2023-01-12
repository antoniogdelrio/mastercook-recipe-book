import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "../../constants/general";
import styles from "./RecipeCard.module.scss"

type Difficulty = "Hard" | "Medium" | "Easy"

export interface RecipeCardSchema {
    id: number,
    title: string,
    image: string,
    time: number,
    difficulty: string
}

export default function RecipeCard (props: RecipeCardSchema) {
    return (
        <Link
            style={{ textDecoration: 'none' }}
            href={`/recipes/${props.id}`}
        >
            <div className={styles.card}>
                <Image
                    src={props.image}
                    alt={props.title}
                    width={100}
                    height={100}
                    blurDataURL={BLUR_DATA_URL}
                    placeholder="blur"
                />
                <div className={styles.info}>
                    <h3>{props.title}</h3>
                    <p><b>Difficulty:</b> {props.difficulty}</p>
                    <p><b>Time:</b> {props.time} minutes</p>
                </div>
            </div>
        </Link>
    )
}