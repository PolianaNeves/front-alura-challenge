import { useLocation } from 'react-router';
import CodeBox from "../../components/CodeBox/CodeBox";
import "./CodeEditor.css";

export default function CodeEditorPage() {
    const location = useLocation();
    return (
        <form className={"code-editor-page"}>
            <CodeBox className={"code-editor-content"} project={location.state}/>
        </form>
    );
}
