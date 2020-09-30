import React, { useReducer } from "react";

import CheckboxPresenter from "./CheckboxPresenter";
import MasterCheckboxPresenter from "./MasterCheckboxPresenter";

type State = {
  checkedInput: number[];
  checkboxNumber: number;
};

const initialState: State = {
  checkedInput: [],
  checkboxNumber: 4,
};

export type Action =
  | {
      type: "CHECK";
      payload: number;
    }
  | {
      type: "UNCHECK";
      payload: number;
    }
  | {
      type: "CHECK_ALL";
    }
  | {
      type: "UNCHECK_ALL";
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHECK":
      return {
        ...state,
        checkedInput: [...state.checkedInput, action.payload],
      };
    case "UNCHECK":
      return {
        ...state,
        checkedInput: state.checkedInput.filter(
          (input) => input !== action.payload
        ),
      };
    case "CHECK_ALL":
      return {
        ...state,
        checkedInput: Array.apply(null, Array(state.checkboxNumber)).map(
          (x, i) => i
        ),
      };
    case "UNCHECK_ALL":
      return {
        ...state,
        checkedInput: [],
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const checkboxes = Array.apply(null, Array(state.checkboxNumber)).map(
    (x, i) => i
  );

  return (
    <div>
      <MasterCheckboxPresenter
        name="master"
        checkedInput={state.checkedInput}
        checkboxNumber={state.checkboxNumber}
        dispatch={dispatch}
      />
      {checkboxes.map((checkbox) => {
        return (
          <CheckboxPresenter
            index={checkbox}
            checkedInput={state.checkedInput}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default App;
