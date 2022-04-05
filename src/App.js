import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router";
import { ConnectionFactory } from "./services/ConnectionFactory";
import { UserDao } from "./dao/UserDao";
import GlobalStyle from "./theme/globalStyles";
import "./theme/fonts.css";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    ConnectionFactory.getConnection()
      .then((connection) => new UserDao(connection))
      .then((dao) => dao.getFirstUser())
      .then((user) => {
        if (user) setUser(user);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='flex justify-center'>
      <GlobalStyle />
      <UserContext.Provider value={user}>
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}
