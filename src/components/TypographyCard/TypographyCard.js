import { faAlignLeft, faTextHeight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TypographyCard.css";

export default function TypographyCard(props) {
    return (
        <div className="flex column radius-8 typography-card">
            {props.typographies.map((typography, index) => {
                return (
                    <div key={index} className="flex justify-between typography-row">
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
                        <div className="flex gap-40 align-center">
                            <div className="flex gap-16">
                                <FontAwesomeIcon
                                    icon={faTextHeight}
                                    style={{ width: 20 }}
                                />
                                <span>{typography.fontSize}px</span>
                            </div>
                            <div className="flex gap-16">
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
