import { render, screen } from "@testing-library/react";
import CustomOptions from "./CustomOptions";

describe("CustomOptions", () => {
    let customOptionsTitle, optionsFields;
    beforeEach(() => {
        render(<CustomOptions />);
        customOptionsTitle = screen.queryByText("personalização");
        optionsFields = screen.queryByTestId("options-fields");
    });

    test("should render component without error", () => {
        expect(customOptionsTitle).toBeInTheDocument();
        expect(optionsFields).toBeInTheDocument();
    });
});
