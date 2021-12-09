import Project from "../../components/Project/Project";
import "./CodeEditor.css";
import CustomOptions from "../../components/CustomOptions/CustomOptions";

export default function CodeEditorPage(props) {
    return (
        <form className={"code-editor-page"}>
            <h1 className={"code-editor-content"}>CodeEditorPage</h1>
            <div className={"code-editor-sidebar"}>
                <Project project={null} />
                <CustomOptions />
                <button
                    type="submit"
                    className={"button-filled button-filled-font"}
                >
                    Salvar projeto
                </button>
            </div>
        </form>
    );
}
