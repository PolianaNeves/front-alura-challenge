import { getByText, findByText, fireEvent } from "@testing-library/react";

const keyDownEvent = {
    key: "ArrowDown",
};

export async function selectOption(element, optionLabel, placeholderText) {
    const placeholder = getByText(element, placeholderText);
    fireEvent.keyDown(placeholder, keyDownEvent);
    await findByText(element, optionLabel);
    fireEvent.click(getByText(element, optionLabel));
}
