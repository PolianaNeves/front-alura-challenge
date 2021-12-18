import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectCardList.css";

export default function ProjectCardList(props) {
    return (
        <div className={"community-projects"} data-testid="community-projects">
            {props.projects.map((project, index) => {
                return (
                    <div key={index} className={"community-project"}>
                        <ProjectCard project={project} readOnly={true} />
                    </div>
                );
            })}
        </div>
    );
}
