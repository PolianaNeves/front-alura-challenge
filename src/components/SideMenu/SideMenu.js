import { faCode, faUsers, faFile } from "@fortawesome/free-solid-svg-icons";
import "./SideMenu.css";
import SideItem from "./SideItem/SideItem";
import Profile from "../Profile/Profile";
import profilePhoto from "../../assets/profile-photo.png";
import { sideMenuLinks, routes } from '../../constants';

const user = { photo: profilePhoto, name: "Harry" };

const items = [
    {
        icon: faCode,
        textLink: sideMenuLinks.codeEditor,
        routePath: `/${routes.home}`,
    },
    {
        icon: faUsers,
        textLink: sideMenuLinks.community,
        routePath: routes.community,
    },
    {
        icon: faFile,
        textLink: sideMenuLinks.styleGuide,
        routePath: routes.styleGuide
    }
];

export default function SideMenu(props) {
    return (
        <div id="side-menu" className={"flex column wrap gap-10 side-menu"}>
            <h1 className={"sidebar-title-font"}>Menu</h1>
            <ul className={"flex column wrap align-start gap-16 list-item"}>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <SideItem item={item} />
                        </li>
                    );
                })}
            </ul>
            <div className={"mobile-profile"}>
                <hr />
                <Profile user={user} />
            </div>
        </div>
    );
}
