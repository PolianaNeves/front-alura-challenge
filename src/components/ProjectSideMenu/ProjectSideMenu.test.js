import { fireEvent, render, screen } from "@testing-library/react";
import ProjectSideMenu from "./ProjectSideMenu";

describe("ProjectSideMenu", () => {
    const project = {
        title: "project example",
        description: "example of description",
    };
    let projectSectionTitle, projectTitle, projectDescription, submitBtn;
    const setUp = () => {
        projectSectionTitle = screen.queryByText("seu projeto");
        projectTitle = screen.queryByLabelText("project-title");
        projectDescription = screen.queryByTestId("project-description");
        submitBtn = screen.queryByText("Salvar projeto");
    };

    test("should render component without error", () => {
        render(<ProjectSideMenu project={project} />);
        setUp();
        expect(projectSectionTitle).toBeInTheDocument();
        expect(projectTitle).toBeInTheDocument();
        expect(projectDescription).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
    });

    test("should display project info if not empty", () => {
        render(<ProjectSideMenu project={project} />);
        setUp();
        fireEvent.change(projectTitle, { target: { value: project.title } });
        expect(projectTitle.value).toBe(project.title);
        fireEvent.change(projectDescription, {
            target: { value: project.description },
        });
        expect(projectDescription.value).toBe(project.description);
    });

    test("should display empty fields when there is no values in the project", () => {
        render(<ProjectSideMenu project={null} />);
        setUp();
        expect(projectTitle.value).toBe("");
        expect(projectDescription.value).toBe("");
    });
});
