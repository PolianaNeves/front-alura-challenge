import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../pages/Home/Home";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Profile from "../../Profile/Profile";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [user, setUser] = useState(null);
  const contextUser = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.project) {
      setBgColor(props.project.backgroundColor);
      setCodeSnippet(props.project.codeSnippet);
      const user = {
        name: props.project.author,
      };
      setUser(user);
    }
  }, [props.project]);

  const handleCodeChange = (e) => {
    e.preventDefault();
    let codeSnippet = e.target.value;
    props.onCodeChange(codeSnippet);
    setCodeSnippet(codeSnippet);
  };

  const handleClick = () => {
    if (props.project && props.communityPage) {
      const project = {
        name: props.project.name,
        description: props.project.description,
        codeSnippet: props.project.codeSnippet,
        language: props.project.language,
        backgroundColor: props.project.backgroundColor,
        author: props.project.author,
      };
      navigate("/home", { state: { project, user: contextUser } });
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
              onChange={handleCodeChange}
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
              onChange={handleCodeChange}
            />
          )}
        </div>
      </div>
      {props.project && props.communityPage && (
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
