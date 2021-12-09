import "./App.css";
import GlobalStyle from "./theme/globalStyles";
import "./theme/fonts.css";
import Navbar from "./components/NavBar/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";
import { Outlet } from "react-router";

function App() {
    return (
        <div>
            <GlobalStyle />
            <div className={"home-page"}>
                <Navbar />
                <div className={"home-content"}>
                    <SideMenu />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
