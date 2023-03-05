import React, { useContext } from "react";
import context from "../context";
import Option from "./Option";

const OptionsSection = () => {
  const { subjectNumber, questionNumber, mcqArray, updateSelectedOption } =
    useContext(context);

  const updateKaro = (newSelectedOption) => {
    updateSelectedOption(newSelectedOption);
  };
  const selectedOption =
    mcqArray[subjectNumber].questions[questionNumber].selectedOption;
  return (
    <section id="options-section">
      {mcqArray[subjectNumber].questions[questionNumber].options.map((elm) => (
        <Option
          option={elm}
          key={elm}
          checked={elm === selectedOption}
          onUpdate={updateKaro}
        />
      ))}
    </section>
  );
};

export default OptionsSection;
