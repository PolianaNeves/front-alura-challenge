import Select from "../Select/Select";
import "./CustomOptions.css";

export default function CustomOptions(props) {
    const languageOptions = [
        { value: "javascript", label: "JavaScript" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
    ];

    return (
        <section className={"custom-options-section"}>
            <h1 className={"sidebar-title-font"}>personalização</h1>
            <div className={"options-fields"} data-testid="options-fields">
                <Select
                    options={languageOptions}
                    placeholder={"Selecione a linguagem..."}
                    className={"select"}
                />
                <Select className={"select"} />
            </div>
        </section>
    );
}
