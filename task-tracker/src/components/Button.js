
const Button = ({color, text, onClick}) => {
    return (
        <div>
        <button
            style={{backgroundColor: color}}
            className="btn"
            onClick={onClick}
        >{text}</button>
        </div>
            )
}
Button.defaultProps = {
    color: "grey",
    text: "Click",
    onClick: "Click"
}
export default Button
