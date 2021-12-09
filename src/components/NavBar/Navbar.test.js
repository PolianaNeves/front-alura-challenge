import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
    let logo, searchInput;

    beforeEach(() => {
        render(<Navbar />);
        logo = screen.queryByAltText("platform-logo");
        searchInput = screen.queryByPlaceholderText("Busque por algo");
    });

    test("should render without error", () => {
        expect(logo).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
    });
});
