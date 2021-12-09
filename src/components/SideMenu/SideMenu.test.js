import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideMenu from "./SideMenu";

describe("SideMenu", () => {
    let sideMenuTitle, codeEditorLink, communityLink;
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SideMenu />
            </BrowserRouter>
        );
        sideMenuTitle = screen.queryByText("Menu");
        codeEditorLink = screen.queryByText("Editor de código");
        communityLink = screen.queryByText("Comunidade");
    });

    test("should render component without error", () => {
        expect(sideMenuTitle).toBeInTheDocument();
        expect(codeEditorLink).toBeInTheDocument();
        expect(communityLink).toBeInTheDocument();
    });
});
