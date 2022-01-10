import { NavLink } from "react-router-dom";
import rules from "../images/rules.jpg";
const Rules = () => {
  return (
    <div className="Rules">
      <h1 className="rules__title">Правила игры</h1>
      <div className="rules__image">
        <img src={rules} />
      </div>
      <p>
        В начале игры Судоку некоторые клетки таблицы заполнены цифрами, в
        зависимости от уровня сложности. Судоку считается решенным, если все
        пустые клетки заполнены цифрами от 1 до 9. Цифры не должны повторяться в
        каждой из 9 <span>строк</span>, <span>столбцов</span> и{" "}
        <span>блоков</span>. Изучите игровое поле и найдите цифры, которые будут
        подходить для каждой клетки.
      </p>
      <p>Удачи и хорошей игры!</p>
      <NavLink to="/menu" className="btn">
        В меню
      </NavLink>
    </div>
  );
};
export default Rules;
