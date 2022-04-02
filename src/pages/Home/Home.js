import Navbar from "../../components/NavBar/Navbar";
import GlobalStyle from "../../theme/globalStyles";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Outlet } from "react-router";
import { useLocation } from 'react-router';
import "../../App.css";
import "../../theme/fonts.css";
import { useState, useEffect } from 'react';
import { ConnectionFactory } from '../../services/ConnectionFactory';
import { UserDao } from '../../dao/UserDao';
import { User } from '../../models/User';

export default function Home(){
    const location = useLocation();
    const [user, setUser] = useState(null)

    useEffect(() => {
      if (location.state){
        setUser(new User(location.state._name))
      }
    }, [location.state])

    

    return (
        <div className={"home-page"}>
          <GlobalStyle />
          <Navbar user={user}/>
          <div className={"home-content"}>
            <SideMenu />
            <Outlet />
          </div>
        </div>
      );
}