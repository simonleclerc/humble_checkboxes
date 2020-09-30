import { masterCheckboxPresenter } from "./MasterCheckboxPresenter";

describe("MasterCheckboxPresenter", () => {
  describe("isChecked", () => {
    it("is true when the all checkbox are checked", () => {
      const { isChecked } = masterCheckboxPresenter({
        name: 'master',
        dispatch: () => undefined,
        checkedInput: [0, 1, 2, 3],
        checkboxNumber: 4,
      });

      expect(isChecked).toEqual(true);
    });

    it("is false one checkbox is not checked", () => {
      const { isChecked } = masterCheckboxPresenter({
        name: 'master',
        dispatch: () => undefined,
        checkedInput: [3, 4],
        checkboxNumber: 4,
      });

      expect(isChecked).toEqual(false);
    });
  });

  describe("onChange", () => {
    it("dispacth an uncheck all action if the checkbox is checked", () => {
      const dispatch = jest.fn();
      const { onChange } = masterCheckboxPresenter({
        dispatch,
        name: 'master',
        checkboxNumber: 2,
        checkedInput: [1, 2],
      });

      expect(dispatch).not.toHaveBeenCalled();
      onChange();
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: "UNCHECK_ALL",
      });
    });

    it("dispacth a check action if the checkbox is not checked", () => {
      const dispatch = jest.fn();
      const { onChange } = masterCheckboxPresenter({
        dispatch,
        name: 'master',
        checkboxNumber: 4,
        checkedInput: [4],
      });

      expect(dispatch).not.toHaveBeenCalled();
      onChange();
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: "CHECK_ALL",
      });
    });
  });
});
