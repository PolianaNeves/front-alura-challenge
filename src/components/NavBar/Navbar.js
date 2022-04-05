import { useState, useContext } from "react";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from '../../App';
import { appPlaceholders } from '../../constants';
import logo from "../../assets/Logo.png";
import Profile from "../Profile/Profile";
import "./Navbar.css";

function Navbar(props) {
    const [searchActive, setSearchActive] = useState(false);
    const [barsActive, setBarsActive] = useState(false);
    const [menuIcon, setMenuIcon] = useState(faBars);
    const user = useContext(UserContext)
    const animateSearchInput = () => {
        if (searchActive) {
            document.getElementById("platform-logo").className =
                "platform-logo";
            setSearchActive(false);
            document.getElementById("search-input").className = "hide-element";
            setSearchActive(false);
        } else {
            document.getElementById("platform-logo").className = "hide-element";
            document.getElementById("search-input").className =
                "animate-search";
            setSearchActive(true);
        }
    };

    const animateSideMenu = () => {
        if (barsActive) {
            document.getElementById("side-menu").className = "hide-element";
            setMenuIcon(faBars);
            setBarsActive(false);
        } else {
            document.getElementById("side-menu").className = "mobile-side-menu radius-8";
            setMenuIcon(faTimes);
            setBarsActive(true);
        }
    };

    return (
        <nav className={"flex align-center gap-10 menu-bar"}>
            <img
                id="platform-logo"
                alt="platform-logo"
                src={logo}
                className={"platform-logo"}
            />
            <div className={"flex justify-center gap-10 search-input-box"}>
                <input
                    type="text"
                    id="search-input"
                    placeholder={appPlaceholders.search}
                    className={"search-input body-font"}
                />
                <FontAwesomeIcon
                    id="search-icon"
                    icon={faSearch}
                    className={"color-white search-mobile-icon"}
                    onClick={() => animateSearchInput()}
                    size="2x"
                />
            </div>
            <FontAwesomeIcon
                icon={menuIcon}
                size="2x"
                className={"color-white mobile-bars"}
                onClick={() => animateSideMenu()}
            />
            <div className={"desktop-profile"}>
                <Profile user={user} />
            </div>
        </nav>
    );
}

export default Navbar;
