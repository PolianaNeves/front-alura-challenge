import Project from "../../components/Project/Project";
import "./CodeEditor.css";
import CustomOptions from "../../components/CustomOptions/CustomOptions";
import CodeBox from "../../components/CodeBox/CodeBox";

export default function CodeEditorPage(props) {
    return (
        <form className={"code-editor-page"}>
            <CodeBox className={"code-editor-content"} />
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
