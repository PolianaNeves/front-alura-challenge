import { Outlet } from "react-router";
import Navbar from "../../components/NavBar/Navbar";
import GlobalStyle from "../../theme/globalStyles";
import SideMenu from "../../components/SideMenu/SideMenu";
import "../../App.css";
import "../../theme/fonts.css";

export default function Home() {
  return (
    <div className={"home-page"}>
      <GlobalStyle />
        <Navbar />
        <div className={"home-content"}>
          <SideMenu />
          <Outlet />
        </div>
    </div>
  );
}
