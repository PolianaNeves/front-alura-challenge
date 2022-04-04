import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { User } from "../../models/User";
import { ConnectionFactory } from "../../services/ConnectionFactory";
import { UserDao } from "../../dao/UserDao";
import { UserContext } from "../../App";
import { buttons } from '../../constants';
import "./Login.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const contextUser = useContext(UserContext);

  const handleUserNameChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  useEffect(() => {
    if (contextUser) {
      console.log("encontrou um usuario");
      navigate("/home", { state: { user: contextUser } });
    }
  }, [contextUser, navigate]);

  const saveUser = () => {
    const user = new User(userName);
    ConnectionFactory.getConnection()
      .then((connection) => new UserDao(connection))
      .then((dao) => dao.adiciona(user))
      .then(() => navigate("/home", { state: { user } }))
      .catch((error) => console.error(error));
    ConnectionFactory._closeConnection();
  };

  return (
    <section className="login-section">
      <input
        type="text"
        placeholder="Digite seu nome..."
        value={userName}
        onChange={(e) => handleUserNameChange(e)}
      />
      <button
        type="button"
        className="button-outlined button-outlined-font"
        onClick={saveUser}
      >
        {buttons.logIn}
      </button>
    </section>
  );
}
