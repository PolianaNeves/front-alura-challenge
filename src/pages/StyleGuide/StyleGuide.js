import ColorCard from "../../components/ColorCard/ColorCard";
import TypographyCard from "../../components/TypographyCard/TypographyCard";
import { colors, typographyTypes, shadow } from "../../constants";
import "./StyleGuide.css";

export default function StyleGuide() {
    return (
        <section className="style-guide-section">
            <div>
                <h1 className="title-font">Cores</h1>
                <div className="colors-guide-list">
                {colors.map((color, index) => {
                    return(<ColorCard key={index} color={color} />)
                })}
                </div>
            </div>
            <div>
                <h1 className="title-font">Tipografia</h1>
                <TypographyCard typographies={typographyTypes}/>
            </div>
            <div>
                <h1 className="title-font">Sombras</h1>
                <div className="shadow-guide">
                    <p className="shadow-guide-axis">
                        <span>X = {shadow.xAxis}</span>
                        <span>Y = {shadow.yAxis}</span>
                    </p>
                    rgb({shadow.rgb})
                </div>
            </div>
            <div>
                <h1 className="title-font">Form components</h1>
            </div>
            <div>
                <h1 className="title-font">Botões</h1>
            </div>
            <div>
                <h1 className="title-font">Card do projeto</h1>
            </div>
        </section>
    );
}
