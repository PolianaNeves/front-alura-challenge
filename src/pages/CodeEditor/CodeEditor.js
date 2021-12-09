import Project from "../../components/Project/Project";
import "./CodeEditor.css";
import CustomOptions from "../../components/CustomOptions/CustomOptions";

export default function CodeEditorPage(props) {
    return (
        <div className={"code-editor-page"}>
            <h1 className={"code-editor-content"}>CodeEditorPage</h1>
            <form className={"code-editor-sidebar"}>
                <Project project={null} />
                <CustomOptions />
            </form>
        </div>
    );
}
