import Image from "next/image";
import { BLUR_DATA_URL } from "../../../constants/general";

export default function Logo () {
    return (
        <div style={{width: '100%', height: '5rem', position: 'relative'}}>
            <Image
                src="/logo.svg"
                alt="Mastercook Logo"
                blurDataURL={BLUR_DATA_URL}
                placeholder="blur"
                fill
            />
        </div>
    )
}
