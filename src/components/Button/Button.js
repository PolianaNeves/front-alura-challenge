import "./Button.css";

export default function Button(props) {
    const buttonStyle = props.filled ? "filled" : "outlined";
    const classnames = props.class + ` inter-font body-font color-white button-${buttonStyle}-font button-${buttonStyle} button-${buttonStyle}:hover button-${buttonStyle}:active button-${buttonStyle}:focus`;
    return <button type="button" className={classnames} style={props.style} onClick={() => props.click()}>{props.text}</button>;
}
