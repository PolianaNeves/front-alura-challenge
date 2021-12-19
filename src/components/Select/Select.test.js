import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
    const options = [
        { value: "javascript", label: "JavaScript" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
    ];

    const placeholderText = "Selecione a linguagem...";

    let select, arrowBtn, placeholderInput;
    beforeEach(() => {
        
    });

    const setUp = () => {
        select = screen.queryByTestId("select");
        arrowBtn = screen.queryByTestId("arrow-btn");
        placeholderInput = screen.queryByTestId("placeholder-input");
    }

    test("should render component without error", () => {
        render(<Select options={options} placeholder={placeholderText} />);
        setUp();
        expect(select).toBeInTheDocument();
        expect(arrowBtn).toBeInTheDocument();
        expect(placeholderInput.value).toBe(placeholderText);
    });

    test("should fill language selector", async () => {
        render(<Select options={options} placeholder={placeholderText} />);
        setUp();
        fireEvent.click(arrowBtn);
        const firstOption = screen.queryByDisplayValue(options[0].label);
        fireEvent.click(firstOption);
        expect(placeholderInput.value).toBe(options[0].label);
    });

    test("should render element with selected language", () => {
        render(<Select options={options} placeholder={placeholderText} language={options[0].label}/>);
        setUp();
        expect(placeholderInput.value).toBe(options[0].label);
    })
});
