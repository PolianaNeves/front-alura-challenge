import { useLocation } from 'react-router';
import CodeBox from "../../components/CodeBox/CodeBox";
import "./CodeEditor.css";

export default function CodeEditorPage() {
    const location = useLocation();
    
    return (
        <form className={"flex wrap gap-40 code-editor-page"}>
            <CodeBox project={location.state?.project}/>
        </form>
    );
}
