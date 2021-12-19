import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectSideMenu from "../ProjectSideMenu/ProjectSideMenu";
import "./CodeBox.css";

export default function CodeBox(props) {
    return (
        <section className={"codebox-section"}>
            <div className={"code-editor-section"}>
                <ProjectCard readOnly={false} project={props.project} />
                <button
                    type="button"
                    data-testid="highlight-btn"
                    className={
                        "highlight-btn button-outlined button-outlined-font"
                    }
                >
                    Visualizar com o highlight
                </button>
            </div>
            <div className="side-menu-section">
                <ProjectSideMenu project={props.project}/>
            </div>
        </section>
    );
}
