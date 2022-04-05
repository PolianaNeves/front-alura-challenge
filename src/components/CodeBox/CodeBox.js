import { useState, useRef } from "react";
import { exportAsImage } from "../../helpers/export-images";
import { buttons } from '../../constants';
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectSideMenu from "../ProjectSideMenu/ProjectSideMenu";
import "./CodeBox.css";
import Button from "../Button/Button";

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
        <section className={"flex wrap align-start gap-40 grow-1"}>
            <div className={"flex column gap-16 code-editor-section"}>
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
                <Button
                    class={
                        "highlight-btn button-outlined button-outlined-font"
                    }
                    click={() => setHighlight(!highlight)}
                    text={buttons.highlight}
                />
                <Button
                    class="button-outlined button-outlined-font"
                    click={() =>
                        exportAsImage(exportProjectCard.current, "test")
                    }
                    text={buttons.exportAsImage}
                />
            </div>
            <div className="grow-1">
                <ProjectSideMenu
                    project={props.project}
                    onLanguageChange={getSelectedLanguage}
                    codeSnippet={codeSnippet}
                />
            </div>
        </section>
    );
}
