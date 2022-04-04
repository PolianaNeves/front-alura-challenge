import "./Profile.css";

export default function Profile(props) {
    if (!props.user)
        return <div>No user found!</div>
    return (
        <div className={"profile-box"}>
            {props.user._photo && (
                <img alt="profile-thumbnail" src={props.user._photo} />
            )}
            
            <h1 className={"title-font"}>
                {props.showIcon && "@ "}
                {props.user._name}
            </h1>
        </div>
    );
}
