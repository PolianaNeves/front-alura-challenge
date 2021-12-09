export default function Select(props) {
    return (
        <select data-testid="select">
            <option value="" disabled selected hidden>
                {props.placeholder}
            </option>
            {props.options &&
                props.options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
        </select>
    );
}
