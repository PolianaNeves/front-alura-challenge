import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import ProjectCardList from "./ProjectCardList";

describe("ProjectCardList", () => {
    const projects = [
        {
            name: "Python",
            description: "Learn Python!",
            codeSnippet: "def some_function:",
            language: "python",
            backgroundColor: "#FFFFFF",
            author: "Harry",
            authorPhoto: "",
            showDetails: true
        },
        {
            name: "JS",
            description: "Learn js!",
            codeSnippet: "function example(){}",
            language: "js",
            backgroundColor: "#FFFFFF",
            author: "Harry",
            authorPhoto: "",
            showDetails: true
        }
    ];

    let communityProjects;

    beforeEach(() => {
        render(<BrowserRouter><ProjectCardList projects={projects} /></BrowserRouter>);
        communityProjects = screen.queryByTestId("community-projects");
    });

    test("should render component without error", () => {
        expect(communityProjects).toBeInTheDocument();
    });

    test("should display more than one project in page", () => {
        const project1 = screen.queryByText(projects[0].name);
        expect(project1).toBeInTheDocument();
        const project2 = screen.queryByText(projects[1].name);
        expect(project2).toBeInTheDocument();
        expect(communityProjects.childElementCount).toBe(projects.length);
    });
});
