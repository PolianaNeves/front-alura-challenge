import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";
import Navbar from "../../components/NavBar/Navbar";
import GlobalStyle from "../../theme/globalStyles";
import SideMenu from "../../components/SideMenu/SideMenu";
import "../../App.css";
import "../../theme/fonts.css";

export const UserContext = createContext();

export default function Home() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user);
    }
  }, [location.state]);

  return (
    <div className={"home-page"}>
      <GlobalStyle />
      <UserContext.Provider value={user}>
        <Navbar />
        <div className={"home-content"}>
          <SideMenu />
          <Outlet />
        </div>
      </UserContext.Provider>
    </div>
  );
}
