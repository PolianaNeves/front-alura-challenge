import { render, screen } from "@testing-library/react";
import ProjectCardList from "./ProjectCardList";

describe("ProjectCardList", () => {
    const projects = [
        {
            name: "Html 5",
            description: "Learn HTML 5!",
            codeSnippet: "<h1>Exemplo</h1>",
            language: "html",
            backgroundColor: "#FFFFFF",
        },
        {
            name: "Js",
            description: "Learn javascript!",
            codeSnippet: "function example() {}",
            language: "js",
            backgroundColor: "#5b6h5a",
        },
    ];

    let communityProjects;

    beforeEach(() => {
        render(<ProjectCardList projects={projects} />);
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
