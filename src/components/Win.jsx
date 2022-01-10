import { NavLink } from "react-router-dom";
import cool from "../images/cool_big.png"
const Win = () => {
  return (
    <div className="default win">
      <img src={cool} className="sad-cool-img cool-img"/>
      <h1>Ты выиграл!</h1>
      <div className="btns">
        <NavLink to="/menu" className="btn">
          Меню
        </NavLink>
        <NavLink to="/main" className="btn">
          Играть еще раз
        </NavLink>
      </div>
    </div>
  );
};
export default Win;
