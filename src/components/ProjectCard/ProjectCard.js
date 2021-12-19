import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';

export default function ProjectCard(props) {
    const navigate = useNavigate();
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
    const handleClick = () => {
        if(props.project){
            const project = {
                name: props.project.name,
                description: props.project.description,
                codeSnippet: codeSnippet,
                backgroundColor: bgColor,
                author: user.author,
                authorPhoto: user.authorPhoto
            }
            navigate("/", {state: project});
        }
    }
    return (
        <section className={"project-card"} onClick={() => handleClick()}>
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
            {(props.project && props.project.showDetails) && (
                <div className="project-details" data-testid="project-details">
                    <h1 className={"title-font"}>{props.project.name}</h1>
                    <p className={"body-font body-details-opacity"}>
                        {props.project.description}
                    </p>
                    <div className={"details-footer"}>
                        <div className="community-reaction">
                            <div
                                data-testid="comment-count"
                                className={"comment-item"}
                            >
                                <FontAwesomeIcon
                                    icon={faComment}
                                    size="lg"
                                />
                                <p className="body-font">9</p>
                            </div>
                            <div
                                data-testid="likes-count"
                                className={"favorite-item"}
                            >
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    size="lg"
                                />
                                <p className="body-font">9</p>
                            </div>
                        </div>
                        {user && (
                            <div className="project-author">
                                <Profile showIcon={true} user={user} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
