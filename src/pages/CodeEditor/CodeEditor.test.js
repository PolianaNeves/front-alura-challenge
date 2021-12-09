import { render, screen } from "@testing-library/react";
import CodeEditorPage from "./CodeEditor";

describe("CodeEditor", () => {
    let submitBtn;
    beforeEach(() => {
        render(<CodeEditorPage />);
        submitBtn = screen.queryByText("Salvar projeto");
    });

    test("should render component withour error", () => {
        expect(submitBtn).toBeInTheDocument();
    });
});
