import Project from "../../components/Project/Project";
import "./CodeEditor.css";
import CustomOptions from "../../components/CustomOptions/CustomOptions";

export default function CodeEditorPage(props) {
    return (
        <div className={"code-editor-page"}>
            <h1>CodeEditorPage</h1>
            <div className={"code-editor-sidebar"}>
                <Project project={null} />
                <CustomOptions />
            </div>
        </div>
    );
}
