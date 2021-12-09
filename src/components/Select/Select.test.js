import { render, screen } from "@testing-library/react";
import Select from "./Select";
import { selectOption } from "../../helpers/react-select";

describe("Select", () => {
    const options = [
        { value: "javascript", label: "JavaScript" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
    ];

    const placeholderText = "Selecione a linguagem...";

    let select;
    beforeEach(() => {
        render(<Select options={options} placeholder={placeholderText} />);
        select = screen.queryByTestId("select");
    });

    test("should fill language selector", async () => {
        await selectOption(select, options[0].label, placeholderText);
    });
});
