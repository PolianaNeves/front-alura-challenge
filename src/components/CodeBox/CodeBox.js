import { useState, useRef } from "react";
import { exportAsImage } from "../../helpers/export-images";
import { buttons } from '../../constants';
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectSideMenu from "../ProjectSideMenu/ProjectSideMenu";
import "./CodeBox.css";

export default function CodeBox(props) {
    const [language, setLanguage] = useState("");
    const [highlight, setHighlight] = useState(false);
    const exportProjectCard = useRef(null);
    const [codeSnippet, setCodeSnippet] = useState("");

    const getSelectedLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const getUpdatedCode = (code) => {
        setCodeSnippet(code)
    }

    return (
        <section className={"codebox-section"}>
            <div className={"code-editor-section"}>
                <div ref={exportProjectCard}>
                    <ProjectCard
                        readOnly={false}
                        project={props.project}
                        highlight={highlight}
                        language={language}
                        communityPage={false}
                        onCodeChange={getUpdatedCode}
                    />
                </div>
                <button
                    type="button"
                    className={
                        "highlight-btn button-outlined button-outlined-font"
                    }
                    onClick={() => setHighlight(!highlight)}
                >
                    {buttons.highlight}
                </button>
                <button
                    type="button"
                    className="button-outlined button-outlined-font"
                    onClick={() =>
                        exportAsImage(exportProjectCard.current, "test")
                    }
                >
                    {buttons.exportAsImage}
                </button>
            </div>
            <div className="side-menu-section">
                <ProjectSideMenu
                    project={props.project}
                    onLanguageChange={getSelectedLanguage}
                    codeSnippet={codeSnippet}
                />
            </div>
        </section>
    );
}
