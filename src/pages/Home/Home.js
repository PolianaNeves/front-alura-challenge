import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";
import { User } from "../../models/User";
import Navbar from "../../components/NavBar/Navbar";
import GlobalStyle from "../../theme/globalStyles";
import SideMenu from "../../components/SideMenu/SideMenu";
import "../../App.css";
import "../../theme/fonts.css";

export default function Home() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUser(new User(location.state._name));
    }
  }, [location.state]);

  return (
    <div className={"home-page"}>
      <GlobalStyle />
      <Navbar user={user} />
      <div className={"home-content"}>
        <SideMenu />
        <Outlet />
      </div>
    </div>
  );
}
