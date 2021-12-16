import CodeBox from "../../components/CodeBox/CodeBox";
import "./CodeEditor.css";

export default function CodeEditorPage(props) {
    return (
        <form className={"code-editor-page"}>
            <CodeBox className={"code-editor-content"} />
        </form>
    );
}
