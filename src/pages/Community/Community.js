import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";
import profilePhoto from "../../assets/profile-photo.png";

const projects = [
    {
        name: "JavaScript",
        description: "Learn Python!",
        codeSnippet: "def some_function:",
        language: "JavaScript",
        backgroundColor: "#FFFFFF",
        author: "Harry",
        authorPhoto: profilePhoto,
        showDetails: true
    }
];

export default function CommunityPage(props) {
    return <ProjectCardList projects={projects} />;
}
