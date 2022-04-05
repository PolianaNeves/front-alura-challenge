import { colors, typographyTypes, shadow } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
import ColorCard from "../../components/ColorCard/ColorCard";
import TypographyCard from "../../components/TypographyCard/TypographyCard";
import Select from "../../components/ProjectSideMenu/Select/Select";
import Button from "../../components/Button/Button";
import "./StyleGuide.css";

export default function StyleGuide() {
    return (
        <section className="flex column wrap gap-48">
            <div>
                <h1 className="title-font">Cores</h1>
                <div className="flex wrap justify-center gap-16">
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
                <div className="flex column wrap radius-8 shadow-guide">
                    <p className="flex justify-between">
                        <span>X = {shadow.xAxis}</span>
                        <span>Y = {shadow.yAxis}</span>
                    </p>
                    rgb({shadow.rgb})
                </div>
            </div>
            <div>
                <h1 className="title-font">Form components</h1>
                <div className="flex wrap gap-48 color-white">
                    <div className="flex column wrap gap-16">
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
                    <div className="flex column wrap gap-16">
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
                <div className="flex wrap text-center buttons-guide">
                    <div className="flex column wrap gap-16 color-white">
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
                    <div className="flex column wrap gap-16 color-white">
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
                    <div className="flex column wrap gap-16 align-center color-white">
                        Icon button
                        <FontAwesomeIcon
                            id="search-icon"
                            icon={faBars}
                            className={"primary-menu-item-icon"}
                            size="2x"
                        />
                        {/* TODO: Change icons to match style guide */}
                    </div>
                    <div className="flex column wrap gap-16 align-center color-white">
                        Item de menu
                        <FontAwesomeIcon
                            id="search-icon"
                            icon={faDotCircle}
                            className={"primary-menu-item-icon"}
                            size="2x"
                        />
                        <FontAwesomeIcon
                            id="search-icon"
                            icon={faDotCircle}
                            style={{
                                backgroundColor: "rgba(80,129,251,0.64)",
                            }}
                            className={"primary-menu-item-icon"}
                            size="2x"
                        />
                        <FontAwesomeIcon
                            id="search-icon"
                            icon={faDotCircle}
                            style={{
                                backgroundColor: "var(--blue-300)",
                            }}
                            className={"primary-menu-item-icon"}
                            size="2x"
                        />
                    </div>
                    {/* TODO: Refactor and add comments,favorites and users */}
                </div>
            </div>
            <div>
                <h1 className="title-font">Card do projeto</h1>
            </div>
        </section>
    );
}
