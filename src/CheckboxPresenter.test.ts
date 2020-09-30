import { checkboxPresenter } from "./CheckboxPresenter";

describe("CheckboxPresenter", () => {
  describe("isChecked", () => {
    it("is true when the corresponding index is checked", () => {
      const { isChecked } = checkboxPresenter({
        index: 2,
        checkedInput: [2],
        dispatch: () => undefined,
      });

      expect(isChecked).toEqual(true);
    });

    it("is false when the corresponding index is not in the checked input list", () => {
      const { isChecked } = checkboxPresenter({
        index: 2,
        checkedInput: [3],
        dispatch: () => undefined,
      });

      expect(isChecked).toEqual(false);
    });
  });

  describe("onChange", () => {
    it("dispacth an uncheck action with the index as payload if the checkbox is already checked", () => {
      const dispatch = jest.fn();
      const { onChange } = checkboxPresenter({
        dispatch,
        index: 2,
        checkedInput: [2],
      });

      expect(dispatch).not.toHaveBeenCalled();
      onChange();
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: "UNCHECK",
        payload: 2,
      });
    });

    it("dispacth a check action with the index as payload if the checkbox is not checked", () => {
      const dispatch = jest.fn();
      const { onChange } = checkboxPresenter({
        dispatch,
        index: 2,
        checkedInput: [4],
      });

      expect(dispatch).not.toHaveBeenCalled();
      onChange();
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: "CHECK",
        payload: 2,
      });
    });
  });
});
