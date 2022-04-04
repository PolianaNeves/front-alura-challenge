import "./Button.css";

export default function Button(props) {
    const buttonStyle = props.filled ? "filled" : "outlined";
    const classnames = props.class + ` button-${buttonStyle}-font button-${buttonStyle} button-${buttonStyle}:hover button-${buttonStyle}:active button-${buttonStyle}:focus`;
    return <button type="button" className={classnames} onClick={() => props.click()}>{props.text}</button>;
}
