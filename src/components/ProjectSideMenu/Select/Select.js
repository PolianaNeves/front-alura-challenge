import { useEffect, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Select.css";

export default function Select(props) {
    const [chosen, setChosen] = useState(props.placeholder);
    const [fieldLabel] = useState("");
    const [arrowDown, setArrowDown] = useState(false);

    const handleClick = () => {
        if (arrowDown) {
            document.getElementById("items").className = "hide-items";
            setArrowDown(false);
        } else {
            document.getElementById("items").className = "items";
            setArrowDown(true);
        }
    };

    const handleItemClick = (itemValue, itemLabel) => {
        document.getElementById("items").className = "hide-items";
        props.onLanguageChange(itemValue)
        setChosen(itemLabel);
    };

    useEffect(() => {
        if(props.language){
            let languages = props.options.filter(option => option.value === props.language);
            if (languages.length > 0)
                setChosen(languages[0].label)
        }
    }, [chosen, props.options, props.language])

    return (
        <div className={"select"} data-testid="select">
            <div className={"placeholder"}>
                <input
                    disabled
                    value={fieldLabel || chosen}
                    data-testid="placeholder-input"
                    className={"placeholder-input body-font select-font"}
                />
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className={"arrow-icon"}
                    data-testid={"arrow-btn"}
                    size="lg"
                    onClick={() => handleClick()}
                />
            </div>
            <div id="items" className={"hide-items"}>
                {props.options &&
                    props.options.map((option, index) => {
                        return (
                            <input
                                name="input"
                                type="text"
                                key={index}
                                className={"body-font select-font"}
                                onClick={() => handleItemClick(option.value, option.label)}
                                value={fieldLabel || option.label}
                                readOnly
                            />
                        );
                    })}
            </div>
        </div>
    );
}
