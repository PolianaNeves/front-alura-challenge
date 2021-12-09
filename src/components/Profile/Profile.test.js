import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile", () => {
    let profilePhoto, userName;
    beforeEach(() => {
        render(<Profile />);
        profilePhoto = screen.queryByAltText("profile-thumbnail");
        userName = screen.queryByText("Harry");
    });

    test("should render the component without error", () => {
        expect(profilePhoto).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
    });
});
