import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";
import profilePhoto from "../../assets/profile-photo.png";

const projects = [
    {
        name: "Python",
        description: "Learn Python!",
        codeSnippet: "def some_function:",
        language: "python",
        backgroundColor: "#FFFFFF",
        author: "Harry",
        authorPhoto: profilePhoto,
        showDetails: true
    }
];

export default function CommunityPage(props) {
    return <ProjectCardList projects={projects} />;
}
