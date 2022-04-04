import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ConnectionFactory } from "../../services/ConnectionFactory";
import { ProjectDao } from "../../dao/ProjectDao";
import { Project } from "../../models/Project";
import { UserContext } from "../../App";
import {
  languageOptions,
  sideMenuTitles,
  appPlaceholders,
  buttons,
} from "../../constants";
import Button from "../Button/Button";
import Select from "./Select/Select";
import "./ProjectSideMenu.css";

export default function ProjectSideMenu(props) {
  const [pickedColor, setPickedColor] = useState("#6BD1FF");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();
  const contextUser = useContext(UserContext);

  useEffect(() => {
    if (props.project) {
      setTitle(props.project.name);
      setDescription(props.project.description);
      setPickedColor(props.project.backgroundColor);
      setLanguage(props.project.language);
    }
  }, [props.project]);

  const changeColor = (e) => {
    e.preventDefault();
    setPickedColor(document.getElementById("color-input").value);
    const codeBoxBg = document.getElementById("codebox-bg");
    if (codeBoxBg) codeBoxBg.style.backgroundColor = pickedColor;
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const getSelectedLanguage = (selectedLanguage) => {
    props.onLanguageChange(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  const saveProject = () => {
    const project = new Project(
      title,
      description,
      props.codeSnippet,
      language,
      pickedColor,
      contextUser._name
    );
    ConnectionFactory.getConnection()
      .then((connection) => new ProjectDao(connection))
      .then((dao) => dao.adiciona(project))
      .then(() => navigate("/home/community", { state: { user: contextUser } }))
      .catch((error) => console.log(error));
    ConnectionFactory._closeConnection();
  };

  return (
    <section className={"project-side-menu"}>
      <h1 className={"sidebar-title-font"}>{sideMenuTitles.yourProject}</h1>
      <div className={"project-fields"}>
        <input
          className={"body-font"}
          aria-label="project-title"
          type="text"
          placeholder={appPlaceholders.projectName}
          value={title || ""}
          onChange={(e) => handleTitleChange(e)}
        />
        <textarea
          aria-label="project-description"
          placeholder={appPlaceholders.projectDescription}
          rows="3"
          value={description}
          onChange={(e) => handleDescriptionChange(e)}
          className={"body-font"}
        />
      </div>

      <section className={"custom-options-section"}>
        <h1 className={"sidebar-title-font"}>{sideMenuTitles.customization}</h1>
        <div className={"options-fields"}>
          <Select
            options={languageOptions}
            placeholder={appPlaceholders.projectCustomization}
            className={"select"}
            language={language}
            onLanguageChange={getSelectedLanguage}
          />
          <input
            id="color-input"
            className={"color-input"}
            type="color"
            value={pickedColor || "#6BD1FF"}
            onChange={(e) => changeColor(e)}
          />
        </div>
      </section>
      <Button
        class={"button-filled button-filled-font"}
        click={saveProject}
        text={buttons.saveProject}
        filled
      />
    </section>
  );
}
