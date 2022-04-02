// import './Button.css'

const Button = (props) => {
    return (
        <a href={props.href} className={`btn ${props.className}`}>{props.btnText}</a>
    )
}

export default Button