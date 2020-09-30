import React, { FunctionComponent } from 'react';

type CheckbokProps = {
  name?: string;
  isChecked?: boolean;
  onChange?: () => void;
};

export const Checkbox: FunctionComponent<CheckbokProps> = (props) => {
  const { name, isChecked, onChange } = props;
  return (
    <div>
      <input
        checked={isChecked}
        onChange={onChange}
        type="checkbox"
        id={`child${name}`}
      />
      <label htmlFor={`child${name}`}>Item {name}</label>
    </div>
  );
};