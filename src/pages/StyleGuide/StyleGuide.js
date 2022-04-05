import { colors, typographyTypes, shadow } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ColorCard from "../../components/ColorCard/ColorCard";
import TypographyCard from "../../components/TypographyCard/TypographyCard";
import Select from "../../components/ProjectSideMenu/Select/Select";
import Button from "../../components/Button/Button";
import "./StyleGuide.css";

export default function StyleGuide() {
    return (
        <section className="style-guide-section">
            <div>
                <h1 className="title-font">Cores</h1>
                <div className="colors-guide-list">
                    {colors.map((color, index) => {
                        return <ColorCard key={index} color={color} />;
                    })}
                </div>
            </div>
            <div>
                <h1 className="title-font">Tipografia</h1>
                <TypographyCard typographies={typographyTypes} />
            </div>
            <div>
                <h1 className="title-font">Sombras</h1>
                <div className="shadow-guide">
                    <p className="shadow-guide-axis">
                        <span>X = {shadow.xAxis}</span>
                        <span>Y = {shadow.yAxis}</span>
                    </p>
                    rgb({shadow.rgb})
                </div>
            </div>
            <div>
                <h1 className="title-font">Form components</h1>
                <div className="form-components-guide">
                    <div className="input-guide">
                        Input de texto
                        <input
                            value={"Normal"}
                            style={{ padding: 16 }}
                            readOnly
                        />
                        <input
                            value={"Hover"}
                            style={{
                                padding: 16,
                                backgroundColor: "var(--offset-white-hover-24)",
                            }}
                            readOnly
                        />
                    </div>
                    <div className="select-guide">
                        Select
                        <Select placeholder={"Normal"} readOnly />
                        <Select
                            placeholder={"Hover"}
                            style={{
                                backgroundColor: "var(--offset-white-hover-24)",
                            }}
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="title-font">Botões</h1>
                <div className="buttons-guide">
                    <div className="buttons-guide-filled">
                        Filled
                        <Button text={"Normal"} filled />
                        <Button
                            text={"Hover"}
                            style={{
                                backgroundColor: "var(--blue-200)",
                            }}
                            filled
                        />
                        <Button
                            text={"Pressed"}
                            style={{
                                backgroundColor: "var(--blue-200)",
                                border: "4px solid var(--blue-300)",
                            }}
                            filled
                        />
                        <Button
                            style={{
                                backgroundColor: "var(--blue-100)",
                            }}
                            text={"Focus"}
                            filled
                        />
                    </div>
                    <div className="buttons-guide-outlined">
                        Outlined
                        <Button text={"Normal"} />
                        <Button
                            text={"Hover"}
                            style={{
                                backgroundColor: "rgba(80, 129, 251, 0.16)",
                            }}
                        />
                        <Button
                            text={"Pressed"}
                            style={{
                                backgroundColor: "rgba(80, 129, 251, 0.16)",
                                border: "4px solid rgba(80, 129, 251, 0.24)",
                                borderRadius: "8px",
                            }}
                        />
                        <Button
                            style={{
                                backgroundColor: "rgba(80, 129, 251, 0.24)",
                            }}
                            text={"Focus"}
                        />
                    </div>
                    <div className="icon-button-guide">
                        Icon button
                        <FontAwesomeIcon
                            id="search-icon"
                            icon={faBars}
                            className={"primary-menu-item-icon"}
                            size="2x"
                        />
                        {/* TODO: Change icons to match style guide */}
                    </div>
                </div>
            </div>
            <div>
                <h1 className="title-font">Card do projeto</h1>
            </div>
        </section>
    );
}
