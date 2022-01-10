import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="default menu">
      <h1>Судоку</h1>
      <p>Игра, которая развивает твой мозг</p>
      <NavLink to="/main" className="btn">
        Играть
      </NavLink>
      <NavLink to="/rules" className="btn">
        Правила
      </NavLink>
    </div>
  );
};

export default Menu;
