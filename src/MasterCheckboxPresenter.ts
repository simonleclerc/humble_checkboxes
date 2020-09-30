import { Dispatch } from "react";

import { withPresenter } from "./WithPresenter";
import { Checkbox } from "./Checkbox";
import { Action } from "./App";

export const masterCheckboxPresenter = ({
  name,
  checkedInput,
  checkboxNumber,
  dispatch,
}: {
  name: string;
  checkedInput: number[];
  checkboxNumber: number;
  dispatch: Dispatch<Action>;
}) => {
  const areAllChecked = checkedInput.length === checkboxNumber;
  const onChange = () => {
    if (areAllChecked) {
      dispatch({ type: "UNCHECK_ALL" });
    } else {
      dispatch({ type: "CHECK_ALL" });
    }
  };
  return {
    name,
    onChange,
    isChecked: areAllChecked,
  };
};

const MasterCheckboxPresenter = withPresenter(
  Checkbox,
  masterCheckboxPresenter
);

export default MasterCheckboxPresenter;
