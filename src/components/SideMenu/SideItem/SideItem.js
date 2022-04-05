import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SideItem(props) {
    const isHome = props.item.routePath === "/home" ? true : false;
    return (
        <div>
            <Link
                to={props.item.routePath}
                replace={isHome}
                className={"flex primary-menu-item body-font"}
            >
                <div
                    className={"primary-menu-item-icon"}
                    data-testid={"side-item-icon"}
                >
                    <FontAwesomeIcon
                        icon={props.item.icon}
                        className={"primary-icon-opacity"}
                        style={{width: 20}}
                    />
                </div>
                <p>{props.item.textLink}</p>
            </Link>
        </div>
    );
}
