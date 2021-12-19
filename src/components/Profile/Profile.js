import React from "react";
import "./Profile.css";

export default function Profile(props) {
    return (
        <div className={"profile-box"}>
            {props.user.photo && (
                <img alt="profile-thumbnail" src={props.user.photo} />
            )}
            
            <h1 className={"title-font"}>
                {props.showIcon && "@ "}
                {props.user.name}
            </h1>
        </div>
    );
}
