import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectCardList.css";

export default function ProjectCardList(props) {
    return (
        <div className={"flex wrap gap-24"}>
            {props.projects.map((project, index) => {
                return (
                    <div key={index} className={"community-project"}>
                        <ProjectCard project={project} readOnly={true} communityPage/>
                    </div>
                );
            })}
        </div>
    );
}
