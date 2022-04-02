import { useEffect, useState } from "react";
import Profile from "../../Profile/Profile";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function ProjectCard(props) {
    const navigate = useNavigate();
    const [codeSnippet, setCodeSnippet] = useState("");
    const [bgColor, setBgColor] = useState("");
    const [user, setUser] = useState(null);

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

    const handleCodeChange = (event) => {
        event.preventDefault()
        let codeSnippet = event.target.value
        props.onCodeChange(codeSnippet)
        setCodeSnippet(codeSnippet);
    };

    const handleClick = () => {
        if (props.project) {
            const project = {
                name: props.project.name,
                description: props.project.description,
                codeSnippet: codeSnippet,
                language: props.project.language,
                backgroundColor: bgColor,
                author: user.name,
                authorPhoto: user.photo,
                showDetails: false,
            };
            navigate("/", { state: project });
        }
    };

    return (
        <section className={"project-card"} onClick={() => handleClick()}>
            <div
                id="codebox-bg"
                className={"codebox-bg"}
                style={{ backgroundColor: bgColor }}
            >
                <div className={"codebox"}>
                    <div className={"codebox-options"}>
                        <div className={"exit-btn"} />
                        <div className={"minimize-btn"} />
                        <div className={"expand-btn"} />
                    </div>
                    {props.highlight ? (
                        <CodeEditor
                            className={"codebox-text"}
                            value={codeSnippet || ""}
                            language={props.language}
                            placeholder="Please enter your code."
                            onChange={(e) => handleCodeChange(e)}
                            style={{
                                backgroundColor: "var(--codebox-color)",
                                fontFamily: "monospace",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: 14,
                            }}
                        />
                    ) : (
                        <textarea
                            className={"codebox-text"}
                            value={codeSnippet || ""}
                            onChange={(e) => handleCodeChange(e)}
                        />
                    )}
                </div>
            </div>
            {props.project && props.showDetails && (
                <div className="project-details">
                    <h1 className={"title-font"}>{props.project.name}</h1>
                    <p className={"body-font body-details-opacity"}>
                        {props.project.description}
                    </p>
                    <div className={"details-footer"}>
                        <div className="community-reaction">
                            <div className={"comment-item"}>
                                <FontAwesomeIcon icon={faComment} size="lg" />
                                <p className="body-font">9</p>
                            </div>
                            <div className={"favorite-item"}>
                                <FontAwesomeIcon icon={faHeart} size="lg" />
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
