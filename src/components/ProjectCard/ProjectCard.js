import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard(props) {
    const [codeSnippet, setCodeSnippet] = useState("");
    const [bgColor, setBgColor] = useState("");
    const [user, setUser] = useState(null);
    const handleChange = (e) => {
        e.preventDefault();
        setCodeSnippet(e.target.value);
    };
    useEffect(() => {
        if (props.project) {
            setBgColor(props.project.backgroundColor);
            setCodeSnippet(props.project.codeSnippet);
            const user = {
                photo: props.project.authorPhoto,
                name: props.project.author,
            };
            setUser(user);
        }
    }, [codeSnippet, props.project]);
    return (
        <section className={"project-card"}>
            <div
                id="codebox-bg"
                data-testid="codebox-bg"
                className={"codebox-bg"}
                style={{ backgroundColor: bgColor }}
            >
                <div data-testid="codebox" className={"codebox"}>
                    <div className={"codebox-options"}>
                        <button data-testid="exit-btn" className={"exit-btn"} />
                        <button
                            data-testid="minimize-btn"
                            className={"minimize-btn"}
                        />
                        <button
                            data-testid="expand-btn"
                            className={"expand-btn"}
                        />
                    </div>
                    <textarea
                        rows="13"
                        data-testid="codebox-text"
                        className={"codebox-text"}
                        value={codeSnippet || ""}
                        onChange={(e) => handleChange(e)}
                        readOnly={props.readOnly}
                        autoFocus
                    />
                </div>
            </div>
            {props.project && (
                <div className="project-details" data-testid="project-details">
                    <h1 className={"title-font"}>{props.project.name}</h1>
                    <p className={"body-font body-details-opacity"}>
                        {props.project.description}
                    </p>
                    <div className={"details-footer"}>
                        <div className="community-reaction">
                            <div
                                data-testid="comment-count"
                                className={"comment-count"}
                            >
                                <FontAwesomeIcon
                                    icon={faComment}
                                    size="lg"
                                    className={"comment-icon"}
                                />
                                <p className="body-font">9</p>
                            </div>
                            <div
                                className={"likes-count"}
                                data-testid="likes-count"
                            >
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    size="lg"
                                    className={"likes-icon"}
                                />
                                <p className="body-font">9</p>
                            </div>
                        </div>
                        {user && (
                            <div className="project-author">
                                <Profile user={user} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
