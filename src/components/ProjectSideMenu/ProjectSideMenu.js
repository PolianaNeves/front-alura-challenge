import { useEffect, useState } from "react";
import Select from '../Select/Select';
import "./ProjectSideMenu.css";

export default function ProjectSideMenu(props) {
    const [pickedColor, setPickedColor] = useState("#6BD1FF");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const languageOptions = [
        { value: "javascript", label: "JavaScript" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
    ];
    
    useEffect(() => {
        if (props.project) {
            setTitle(props.project.name);
            setDescription(props.project.description);
            setPickedColor(props.project.backgroundColor);
        }
    }, [props.project, title, description]);

    const changeColor = () => {
        setPickedColor(document.getElementById("color-input").value);
        const codeBoxBg = document.getElementById("codebox-bg");
        if (codeBoxBg) codeBoxBg.style.backgroundColor = pickedColor;
    };

    const handleChange = (e) => {
        e.preventDefault();
        return e.currentTarget.value;
    };

    return (
        <section className={"project-side-menu"}>
            <h1 className={"sidebar-title-font"}>seu projeto</h1>
            <div className={"project-fields"}>
                <input
                    aria-label="project-title"
                    type="text"
                    data-testid="project-title"
                    placeholder="Nome do seu projeto"
                    value={title}
                    onChange={(e) => handleChange(e)}
                    className={"body-font"}
                />
                <textarea
                    aria-label="project-description"
                    data-testid="project-description"
                    placeholder="Descrição do seu projeto"
                    rows="3"
                    value={description}
                    onChange={(e) => handleChange(e)}
                    className={"body-font"}
                />
            </div>

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

            <button
                type="submit"
                className={"button-filled button-filled-font"}
            >
                Salvar projeto
            </button>
        </section>
    );
}
