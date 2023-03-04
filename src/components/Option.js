import React, { useContext } from "react";
import context from "../context";

const Option = ({ option }) => {
  const { setSaveEnabled } = useContext(context);

  const optionClickHandler = () => {
    setSaveEnabled(true);
  };

  return (
    <div className="option">
      <input
        type="radio"
        name="options"
        value={option}
        onChange={optionClickHandler}
      />
      <textarea
        className="option-text-area"
        rows="3"
        spellCheck="false"
        readOnly={true}
        value={option}
      />
    </div>
  );
};

export default Option;
