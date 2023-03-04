import React, { useContext } from "react";
import context from "../context";
import Option from "./Option";

const OptionsSection = () => {
  const { subjectNumber, questionNumber, mcqArray } = useContext(context);
  return (
    <section id="options-section">
      {mcqArray[subjectNumber].questions[questionNumber].options.map((elm) => (
        <Option option={elm} key={Math.floor(Math.random() * 100)} />
      ))}
    </section>
  );
};

export default OptionsSection;
