import React, { useContext } from "react";
import { subjectAndQuestionContext, mcqContext } from "../context";
import Option from "./Option";

const OptionsSection = () => {
  const { subjectNumber, questionNumber } = useContext(
    subjectAndQuestionContext
  );
  const { mcqArray, setMcqArray } = useContext(mcqContext);

  const updateSelectedOption = (option) => {
    setMcqArray((prevState) => {
      const copyOfMcqArray = [...prevState];
      copyOfMcqArray[subjectNumber].questions[questionNumber].selectedOption =
        option;
      return copyOfMcqArray;
    });
  };
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
