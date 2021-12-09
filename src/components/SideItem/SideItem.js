import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SideItem(props) {
    return (
        <div>
            <Link
                to={props.item.routePath}
                className={"primary-menu-item body-font"}
            >
                <div
                    className={"primary-menu-item-icon"}
                    data-testid={"side-item-icon"}
                >
                    <FontAwesomeIcon
                        icon={props.item.icon}
                        className={"primary-icon-opacity"}
                    />
                </div>
                <p>{props.item.textLink}</p>
            </Link>
        </div>
    );
}
