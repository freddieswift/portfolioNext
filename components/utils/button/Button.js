import Link from "next/link"

const Button = (props) => {
    return (
        <Link href={props.href}><div className={`btn ${props.className}`}>{props.btnText}</div></Link >
    )
}

export default Button