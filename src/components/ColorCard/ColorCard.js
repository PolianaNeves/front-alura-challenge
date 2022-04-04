import "./ColorCard.css";

export default function ColorCard(props) {
    return (
        <div className="color-card">
            <div
                className="color-banner"
                style={{ backgroundColor: props.color.hex }}
            ></div>
            <div className="color-card-body body-font row-font">
                <div className="color-card-row">
                    <span className="row-title">hex</span>
                    {props.color.hex}
                </div>
                <div className="color-card-row">
                    <span className="row-title">rgb</span>
                    {props.color.rgb}
                </div>
            </div>
        </div>
    );
}
