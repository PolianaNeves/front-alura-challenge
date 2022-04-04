import { Outlet } from "react-router";
import Navbar from "../../components/NavBar/Navbar";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./Home.css"

export default function Home() {
  return (
    <div className={"home-page"}>
        <Navbar />
        <div className={"home-content"}>
          <SideMenu />
          <Outlet />
        </div>
    </div>
  );
}
