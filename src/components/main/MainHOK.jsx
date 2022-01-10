import { connect } from "react-redux";
import {
  setValueActionCreator,
  startGameActionCreator,
} from "../../store/reducer";
import Main from "./Main";

const mapStateToProps = (state) => {
  return {
    matrix: state.main.matrix.start,
    values: state.main.values,
    errors: state.main.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setValue(value, idxArr) {
      const action = setValueActionCreator(value, idxArr);
      dispatch(action);
    },
    startGame() {
      dispatch(startGameActionCreator());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
