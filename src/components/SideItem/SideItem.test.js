import { render, screen } from "@testing-library/react";
import SideItem from "./SideItem";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";

describe("SideMenu", () => {
    let icon, textLink;
    const item = {
        icon: faCode,
        textLink: "Editor de código",
        routePath: "codeEditor",
    };
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SideItem item={item} />
            </BrowserRouter>
        );
        icon = screen.queryByTestId("side-item-icon");
        textLink = screen.queryByText(item.textLink);
    });

    test("should render component without error", () => {
        expect(icon).toBeInTheDocument();
        expect(textLink).toBeInTheDocument();
    });
});
