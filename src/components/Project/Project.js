import { useEffect, useState } from "react";
import "./Project.css";

export default function Project(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        if (props.project) {
            setTitle(props.project.title);
            setDescription(props.project.description);
        }
    }, [props.project, title, description]);

    const handleChange = (e) => {
        e.preventDefault();
        return e.currentTarget.value;
    };
    return (
        <section className={"project-section"}>
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
        </section>
    );
}
