interface Props {
    type?: "h1" | "h2" | "h3" | "p" | "span"
    value: string,
    customClasses?: string,
    isBold?: boolean,
}

function Typography ({
    type = 'p',
    value,
    customClasses,
    isBold = false
} : Props) {
    const CustomTypography = type

    return (
        isBold ? (<b className={customClasses}><CustomTypography>{value}</CustomTypography></b>) : 
        (<CustomTypography className={customClasses}>{value}</CustomTypography>)
    )
}

export default Typography
