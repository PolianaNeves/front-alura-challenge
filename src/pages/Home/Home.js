import { Outlet } from "react-router";
import Navbar from "../../components/NavBar/Navbar";
import SideMenu from "../../components/SideMenu/SideMenu";

export default function Home() {
  return (
    <div className={"flex column wrap grow-1"}>
        <Navbar />
        <div className={"flex gap-40"}>
          <SideMenu />
          <Outlet />
        </div>
    </div>
  );
}
