import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
    const project = {
        name: "Python",
        description: "Learn Python!",
        codeSnippet: "def some_function:",
        language: "python",
        backgroundColor: "#FFFFFF",
        author: "Harry",
        authorPhoto: "",
    };

    let codeBoxBackground,
        codeBox,
        codeBoxTextArea,
        exitButton,
        minimizeButton,
        expandButton,
        projectDetails;

    const setUp = () => {
        codeBoxBackground = screen.queryByTestId("codebox-bg");
        codeBox = screen.queryByTestId("codebox");
        codeBoxTextArea = screen.queryByTestId("codebox-text");
        exitButton = screen.queryByTestId("exit-btn");
        minimizeButton = screen.queryByTestId("minimize-btn");
        expandButton = screen.queryByTestId("expand-btn");
        projectDetails = screen.queryByTestId("project-details");
    };

    test("should render component without error", () => {
        render(<ProjectCard readOnly={false} project={null} />);
        setUp();
        expect(codeBoxBackground).toBeInTheDocument();
        expect(codeBox).toBeInTheDocument();
        expect(codeBoxTextArea).toBeInTheDocument();
        expect(exitButton).toBeInTheDocument();
        expect(minimizeButton).toBeInTheDocument();
        expect(expandButton).toBeInTheDocument();
        expect(projectDetails).not.toBeInTheDocument();
    });

    test("should render project details", () => {
        render(<ProjectCard readOnly={true} project={project} />);
        setUp();
        expect(projectDetails).toBeInTheDocument();
        const projectTitle = screen.queryByText(project.name);
        expect(projectTitle).toBeInTheDocument();
        const projectDescription = screen.queryByText(project.description);
        expect(projectDescription).toBeInTheDocument();
        const commentCount = screen.queryByTestId("comment-count");
        expect(commentCount).toBeInTheDocument();
        const likesCount = screen.queryByTestId("likes-count");
        expect(likesCount).toBeInTheDocument();
        const projectAuthor = screen.queryByText(project.author);
        expect(projectAuthor).toBeInTheDocument();
    });
});
