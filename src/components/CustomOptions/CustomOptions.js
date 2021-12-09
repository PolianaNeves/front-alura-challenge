import { useState } from "react";
import Select from "../Select/Select";
import "./CustomOptions.css";

export default function CustomOptions(props) {
    const [pickedColor, setPickedColor] = useState("#6BD1FF");

    const languageOptions = [
        { value: "javascript", label: "JavaScript" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
    ];

    const changeColor = () => {
        setPickedColor(document.getElementById("color-input").value);
    };

    return (
        <section className={"custom-options-section"}>
            <h1 className={"sidebar-title-font"}>personalização</h1>
            <div className={"options-fields"} data-testid="options-fields">
                <Select
                    options={languageOptions}
                    placeholder={"Selecione a linguagem..."}
                    className={"select"}
                />
                <input
                    id="color-input"
                    type="color"
                    value={pickedColor}
                    className={"color-input"}
                    data-testid="color-input"
                    onChange={() => changeColor()}
                />
            </div>
        </section>
    );
}
