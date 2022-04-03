import { useEffect, useState } from "react";
import { ConnectionFactory } from "../../services/ConnectionFactory";
import { ProjectDao } from "../../dao/ProjectDao";
import Select from "./Select/Select";
import "./ProjectSideMenu.css";
import { Project } from "../../models/Project";

export default function ProjectSideMenu(props) {
  const [pickedColor, setPickedColor] = useState("#6BD1FF");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");

  const languageOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
  ];

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
      "teste"
    );
    ConnectionFactory.getConnection()
      .then((connection) => new ProjectDao(connection))
      .then((dao) => dao.adiciona(project))
      .then(() => console.log("projeto adicionado com sucesso"))
      .catch((error) => console.log(error));
    ConnectionFactory._closeConnection();
  };

  return (
    <section className={"project-side-menu"}>
      <h1 className={"sidebar-title-font"}>seu projeto</h1>
      <div className={"project-fields"}>
        <input
          className={"body-font"}
          aria-label="project-title"
          type="text"
          placeholder="Nome do seu projeto"
          value={title || ""}
          onChange={(e) => handleTitleChange(e)}
        />
        <textarea
          aria-label="project-description"
          placeholder="Descrição do seu projeto"
          rows="3"
          value={description}
          onChange={(e) => handleDescriptionChange(e)}
          className={"body-font"}
        />
      </div>

      <section className={"custom-options-section"}>
        <h1 className={"sidebar-title-font"}>personalização</h1>
        <div className={"options-fields"} data-testid="options-fields">
          <Select
            options={languageOptions}
            placeholder={"Selecione a linguagem..."}
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

      <button
        type="submit"
        className={"button-filled button-filled-font"}
        onClick={saveProject}
      >
        Salvar projeto
      </button>
    </section>
  );
}
