import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectSideMenu from "../ProjectSideMenu/ProjectSideMenu";
import "./CodeBox.css";
import { exportAsImage } from "../../helpers/export-images";
import { useRef } from "react/cjs/react.development";

export default function CodeBox(props) {
    const [language, setLanguage] = useState("");
    const [highlight, setHighlight] = useState(false);
    const exportProjectCard = useRef(null);

    const getSelectedLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <section className={"codebox-section"}>
            <div className={"code-editor-section"}>
                <div ref={exportProjectCard}>
                    <ProjectCard
                        readOnly={false}
                        project={props.project}
                        highlight={highlight}
                        language={language}
                    />
                </div>
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
                <button
                    type="button"
                    className="button-outlined button-outlined-font"
                    onClick={() =>
                        exportAsImage(exportProjectCard.current, "test")
                    }
                >
                    Export as image
                </button>
            </div>
            <div className="side-menu-section">
                <ProjectSideMenu
                    project={props.project}
                    onLanguageChange={getSelectedLanguage}
                />
            </div>
        </section>
    );
}
