import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import CodeBox from "./CodeBox";

describe("CodeBox", () => {
    let highlightBtn;

    beforeEach(() => {
        render(<BrowserRouter><CodeBox /></BrowserRouter>);
        highlightBtn = screen.queryByTestId("highlight-btn");
    });

    test("should render component without error", () => {
        expect(highlightBtn).toBeInTheDocument();
    });
});
