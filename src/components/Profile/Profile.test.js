import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
import profilePhoto from "../../assets/profile-photo.png";

describe("Profile", () => {
    const user = { photo: "profilePhoto", name: "Harry" };
    let profilePhoto, userName;
    beforeEach(() => {
        render(<Profile user={user} />);
        profilePhoto = screen.queryByAltText("profile-thumbnail");
        userName = screen.queryByText(user.name);
    });

    test("should render the component without error", () => {
        expect(profilePhoto).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
    });
});
