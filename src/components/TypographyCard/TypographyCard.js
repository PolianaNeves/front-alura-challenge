import { faAlignLeft, faTextHeight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TypographyCard.css";

export default function TypographyCard(props) {
    return (
        <div className="typography-card">
            {props.typographies.map((typography, index) => {
                return (
                    <div key={index} className="typography-row">
                        <span
                            style={{
                                font: typography.font,
                                fontWeight: typography.fontWeight,
                                fontSize: typography.fontSize,
                                lineHeight: typography.lineHeight,
                                letterSpacing: typography.letterSpacing,
                                textTransform: typography.textTransform,
                            }}
                        >
                            {typography.type}
                        </span>
                        <div className="typography-config">
                            <div className="typography-config-item">
                                <FontAwesomeIcon
                                    icon={faTextHeight}
                                    style={{ width: 20 }}
                                />
                                <span>{typography.fontSize}px</span>
                            </div>
                            <div className="typography-config-item">
                                <FontAwesomeIcon
                                    icon={faAlignLeft}
                                    style={{ width: 20 }}
                                />
                                <span>{typography.lineHeight}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
