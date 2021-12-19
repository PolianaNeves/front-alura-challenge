import { fireEvent, render, screen } from "@testing-library/react";
import ProjectSideMenu from "./ProjectSideMenu";

describe("ProjectSideMenu", () => {
    const project = {
        name: "Python",
        description: "Learn Python!",
        codeSnippet: "def some_function:",
        language: "python",
        backgroundColor: "#FFFFFF",
        author: "Harry",
        authorPhoto: "",
        showDetails: true
    };
    let projectSectionTitle, projectTitle, projectDescription, submitBtn, customOptionsTitle, optionsFields, colorInput;
    const setUp = () => {
        projectSectionTitle = screen.queryByText("seu projeto");
        projectTitle = screen.queryByLabelText("project-title");
        projectDescription = screen.queryByTestId("project-description");
        submitBtn = screen.queryByText("Salvar projeto");
        customOptionsTitle = screen.queryByText("personalização");
        optionsFields = screen.queryByTestId("options-fields");
        colorInput = screen.queryByTestId("color-input");
    };

    test("should render component without error", () => {
        render(<ProjectSideMenu project={project} />);
        setUp();
        expect(projectSectionTitle).toBeInTheDocument();
        expect(projectTitle).toBeInTheDocument();
        expect(projectDescription).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
        expect(customOptionsTitle).toBeInTheDocument();
        expect(optionsFields).toBeInTheDocument();
        expect(colorInput).toBeInTheDocument();
    });

    test("should display project info if not empty", () => {
        render(<ProjectSideMenu project={project} />);
        setUp();
        fireEvent.change(projectTitle, { target: { value: project.name } });
        expect(projectTitle.value).toBe(project.name);
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

    test("should display correct color when picked in color input", () => {
        render(<ProjectSideMenu/>);
        setUp();
        fireEvent.change(colorInput, { target: { value: "#ffffff" } });
        expect(colorInput.value).toBe("#ffffff");
    });
});
