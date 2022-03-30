import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectSideMenu from "../ProjectSideMenu/ProjectSideMenu";
import "./CodeBox.css";

export default function CodeBox(props) {
    const [language, setLanguage] = useState("");
    const [highlight, setHighlight] = useState(false);

    const getSelectedLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage)
    }

    return (
        <section className={"codebox-section"}>
            <div className={"code-editor-section"}>
                <ProjectCard readOnly={false} project={props.project} highlight={highlight} language={language}/>
                <button
                    type="button"
                    data-testid="highlight-btn"
                    className={
                        "highlight-btn button-outlined button-outlined-font"
                    }
                    onClick={() => setHighlight(!highlight)}
                >
                    Visualizar com o highlight
                </button>
            </div>
            <div className="side-menu-section">
                <ProjectSideMenu project={props.project} onLanguageChange={getSelectedLanguage}/>
            </div>
        </section>
    );
}
