export default function ProjectCard(props) {
    return (
        <div id="codebox-bg" data-testid="codebox-bg" className={"codebox-bg"}>
            <div data-testid="codebox" className={"codebox"}>
                <div className={"codebox-options"}>
                    <button data-testid="exit-btn" className={"exit-btn"} />
                    <button
                        data-testid="minimize-btn"
                        className={"minimize-btn"}
                    />
                    <button data-testid="expand-btn" className={"expand-btn"} />
                </div>
                <textarea
                    rows="13"
                    data-testid="codebox-text"
                    className={"codebox-text"}
                    autoFocus
                />
            </div>
        </div>
    );
}
