import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/swflix.png";
import "./Menu.css";
import Button from "../Button";
//import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Haha" />
      </Link>
      <Button as={Link} className="ButtonLink" to="cadastro/video">
        Novo filme
      </Button>
    </nav>
  );
}

export default Menu;
