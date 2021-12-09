import { fireEvent, render, screen } from "@testing-library/react";
import CustomOptions from "./CustomOptions";

describe("CustomOptions", () => {
    let customOptionsTitle, optionsFields, colorInput;
    beforeEach(() => {
        render(<CustomOptions />);
        customOptionsTitle = screen.queryByText("personalização");
        optionsFields = screen.queryByTestId("options-fields");
        colorInput = screen.queryByTestId("color-input");
    });

    test("should render component without error", () => {
        expect(customOptionsTitle).toBeInTheDocument();
        expect(optionsFields).toBeInTheDocument();
        expect(colorInput).toBeInTheDocument();
    });

    test("should display correct color when picked in color input", () => {
        fireEvent.change(colorInput, { target: { value: "#ffffff" } });
        expect(colorInput.value).toBe("#ffffff");
    });
});
