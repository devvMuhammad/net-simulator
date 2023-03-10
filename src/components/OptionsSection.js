import React, { useContext, useEffect } from "react";
import { subjectAndQuestionContext, mcqContext, saveContext } from "../context";
import Option from "./Option";

const OptionsSection = () => {
  const { subjectNumber, questionNumber } = useContext(
    subjectAndQuestionContext
  );
  const { setSaveEnabled } = useContext(saveContext);
  const { mcqArray, setMcqArray } = useContext(mcqContext);
  const selectedOption =
    mcqArray[subjectNumber].questions[questionNumber].selectedOption;
  useEffect(() => {
    const currentQuesionCategory =
      mcqArray[subjectNumber].questions[questionNumber].category;
    setSaveEnabled(() =>
      currentQuesionCategory === "unattempted" && selectedOption !== ""
        ? true
        : false
    );
  }, [subjectNumber, questionNumber]);

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
