import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  setValueActionCreator,
  startGameActionCreator,
} from "../store/reducer";

const Main = (props) => {
  const navigate = useNavigate();
  const isWin = () => {
    for (let elem of props.matrix) {
      if (elem.includes(0)) {
        return;
      }
    }
    props.dispatch(startGameActionCreator());
    navigate("/win");
  };
  const isGameOver = () => {
    if (props.errors < 3) {
      return;
    }
    props.dispatch(startGameActionCreator());
    navigate("/gameOver");
  };
  useEffect(() => {
    isWin();
    isGameOver();
    window.onpopstate = () => props.dispatch(startGameActionCreator());
  }, [props.matrix, props.errors]);
  const setValue = (e) => {
    const action = setValueActionCreator(e.target.dataset.value, idxArr);
    props.dispatch(action);
  };
  const [idxArr, newIdxArr] = useState([0, 0]);
  const setActiveInput = (a, b) => {
    newIdxArr([a, b]);
    // console.log(idxArr);
  };
  const tbody = props.matrix.map((tr, trIdx) => {
    return (
      <tr key={trIdx}>
        {tr.map((td, tdIdx) => {
          return (
            <td
              onClick={() => setActiveInput(trIdx, tdIdx)}
              key={`${trIdx}_${tdIdx}`}
              className={
                trIdx === idxArr[0] && tdIdx === idxArr[1]
                  ? "gameAreaTd activeInput"
                  : "gameAreaTd"
              }
            >
              {td || ""}
            </td>
          );
        })}
      </tr>
    );
  });
  const numbers = props.values.map((li) => {
    return (
      <li key={li} data-value={li} onClick={setValue}>
        {li}
      </li>
    );
  });

  return (
    <div className="main">
      <h1 className="title">Судоку</h1>
      <table className="gameArea">
        <tbody className="blocks">{tbody}</tbody>
      </table>
      <ul className="numbers">{numbers}</ul>
      <div className="errors">
        Ошибки: <span>{props.errors} / 3</span>
      </div>
      <NavLink to="/menu" className="btn">
        В меню
      </NavLink>
      <NavLink to="/rules" className="btn">
        Правила
      </NavLink>
    </div>
  );
};

export default Main;
