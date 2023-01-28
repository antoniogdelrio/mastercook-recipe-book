interface Props {
    type: "h1" | "h2" | "h3" | "p" | "span"
    value: string,
    customClasses?: string,
    isBold?: boolean,
}

function Typography ({
    type,
    value,
    customClasses,
    isBold = false
} : Props) {
    const CustomTypography = type

    return (
        isBold ? (<b><CustomTypography className={customClasses}>{value}</CustomTypography></b>) : 
        (<CustomTypography className={customClasses}>{value}</CustomTypography>)
    )
}

export default Typography
