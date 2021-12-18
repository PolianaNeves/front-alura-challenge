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
    },
    {
        name: "Js",
        description: "Learn javascript!",
        codeSnippet: "function example() {}",
        language: "js",
        backgroundColor: "#ab3232",
        author: "Harry",
        authorPhoto: profilePhoto,
    },
    {
        name: "Python",
        description: "Learn Python!",
        codeSnippet: "def some_function:",
        language: "python",
        backgroundColor: "#ab6432",
        author: "Harry",
        authorPhoto: profilePhoto,
    },
    {
        name: "Js",
        description: "Learn javascript!",
        codeSnippet: "function example() {}",
        language: "js",
        backgroundColor: "#aba732",
        author: "Harry",
        authorPhoto: profilePhoto,
    },
    {
        name: "Python",
        description: "Learn Python!",
        codeSnippet: "def some_function:",
        language: "python",
        backgroundColor: "#32ab36",
        author: "Harry",
        authorPhoto: profilePhoto,
    },
    {
        name: "Js",
        description: "Learn javascript!",
        codeSnippet: "function example() {}",
        language: "js",
        backgroundColor: "#32aba9",
        author: "Harry",
        authorPhoto: profilePhoto,
    },
];

export default function CommunityPage(props) {
    return <ProjectCardList projects={projects} />;
}
