import { Dispatch } from "react";

import { withPresenter } from "./WithPresenter";
import { Checkbox } from "./Checkbox";
import { Action } from "./App";

export const checkboxPresenter = ({
  index,
  checkedInput,
  dispatch,
}: {
  index: number;
  checkedInput: number[];
  dispatch: Dispatch<Action>;
}) => {
  const isChecked = checkedInput.includes(index);
  const onChange = () => {
    if (isChecked) {
      dispatch({ type: "UNCHECK", payload: index });
    } else {
      dispatch({ type: "CHECK", payload: index });
    }
  };

  return {
    isChecked,
    onChange,
    name: index.toString(),
  };
};

const CheckboxPresenter = withPresenter(Checkbox, checkboxPresenter);

export default CheckboxPresenter;
