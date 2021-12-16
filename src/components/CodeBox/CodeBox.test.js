import { render, screen } from "@testing-library/react";
import CodeBox from "./CodeBox";

describe("CodeBox", () => {
    let highlightBtn;

    beforeEach(() => {
        render(<CodeBox />);
        highlightBtn = screen.queryByTestId("highlight-btn");
    });

    test("should render component without error", () => {
        expect(highlightBtn).toBeInTheDocument();
    });
});
