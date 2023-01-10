import Image from "next/image";
import Link from "next/link";
import styles from "./RecipeCard.module.css"

type Difficulty = "Hard" | "Medium" | "Easy"

export interface RecipeCardSchema {
    title: string,
    image: string,
    time: number,
    difficulty: string
}

export default function RecipeCard (props: RecipeCardSchema) {
    return (
        <Link
            style={{ textDecoration: 'none' }}
            href="/recipes/4"
        >
            <div className={styles.card}>
                <Image
                    src={props.image}
                    alt={props.title}
                    width={100}
                    height={100}
                    blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcOHnyfwAGLAK4yvlhMQAAAABJRU5ErkJggg=="
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