import React from "react";
import profilePhoto from "../../assets/profile-photo.png";
import "./Profile.css";

export default function Profile(props) {
    return (
        <div className={"profile-box"}>
            <img alt="profile-thumbnail" src={profilePhoto}></img>
            <h1 className={"title-font"}>Harry</h1>
        </div>
    );
}
