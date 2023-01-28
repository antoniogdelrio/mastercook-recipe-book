import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "../../../constants/general";
import { RecipeSummary } from "../../../types";
import Typography from "../../atoms/Typography/Typography";
import styles from "./RecipeCard.module.scss"

type Difficulty = "Hard" | "Medium" | "Easy"

export default function RecipeCard (props: RecipeSummary) {
    return (
        <Link
            style={{ textDecoration: 'none' }}
            href={`/recipes/${props.id}`}
            className={styles.card}
        >
            <Image
                src={props.image}
                alt={props.title}
                width={100}
                height={100}
                blurDataURL={BLUR_DATA_URL}
                placeholder="blur"
            />
            <div className={styles.info}>
                <Typography value={props.title} type="h3" customClasses={styles['info__title']} />
                <div className={styles['info__row']}>
                    <Typography value="Difficulty:" isBold={true} />&nbsp;
                    <Typography value={props.difficulty} />
                </div>
                <div className={styles['info__row']}>
                    <Typography value="Time:" isBold={true} />&nbsp;
                    <Typography value={`${props.time} minutes`} />
                </div>
            </div>
        </Link>
    )
}