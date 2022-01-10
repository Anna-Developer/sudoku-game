import { NavLink } from "react-router-dom";
import sad from "../images/sad.png";
const GameOver = () => {
  return (
    <div className="default gameOver">
      <img src={sad} className="sad-cool-img sad-img"/>
      <h1>Ты проиграл!</h1>
      <div className="btns">
        <NavLink to="/menu" className="btn">
          Меню
        </NavLink>
        <NavLink to="/main" className="btn">
          Попробовать еще раз
        </NavLink>
      </div>
    </div>
  );
};
export default GameOver;
