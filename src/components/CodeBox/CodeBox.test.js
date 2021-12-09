import { render, screen } from "@testing-library/react";
import CodeBox from "./CodeBox";

describe("CodeBox", () => {
    let codeBoxBackground,
        codeBox,
        codeBoxTextArea,
        exitButton,
        minimizeButton,
        expandButton;

    beforeEach(() => {
        render(<CodeBox />);
        codeBoxBackground = screen.queryByTestId("codebox-bg");
        codeBox = screen.queryByTestId("codebox");
        codeBoxTextArea = screen.queryByTestId("codebox-text");
        exitButton = screen.queryByTestId("exit-btn");
        minimizeButton = screen.queryByTestId("minimize-btn");
        expandButton = screen.queryByTestId("expand-btn");
    });

    test("should render component without error", () => {
        expect(codeBoxBackground).toBeInTheDocument();
        expect(codeBox).toBeInTheDocument();
        expect(codeBoxTextArea).toBeInTheDocument();
        expect(exitButton).toBeInTheDocument();
        expect(minimizeButton).toBeInTheDocument();
        expect(expandButton).toBeInTheDocument();
    });
});
