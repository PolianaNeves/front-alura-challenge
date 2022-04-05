import "./ColorCard.css";

export default function ColorCard(props) {
    return (
        <div className="flex column radius-8 color-card">
            <div
                className="color-banner"
                style={{ backgroundColor: props.color.hex }}
            ></div>
            <div className="flex column body-font row-font">
                <div className="flex justify-between">
                    <span className="text-upper row-title">hex</span>
                    {props.color.hex}
                </div>
                <div className="flex justify-between">
                    <span className="text-upper row-title">rgb</span>
                    {props.color.rgb}
                </div>
            </div>
        </div>
    );
}
