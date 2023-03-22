import React, { useState } from "react";
import Test from "./Test";
import mcqBank from "./mcqArray";
import testContext from "./testContext";

const App = () => {
  const [testFinished, setTestFinished] = useState(false);
  const [result, setResult] = useState(true);
  const [subjectScores, setSubjectScores] = useState();
  const testContextObject = {
    testFinished,
    setTestFinished,
    result,
    setResult,
    subjectScores,
    setSubjectScores,
  };
  return (
    <>
      <testContext.Provider value={testContextObject}>
        {!testFinished && <Test mcqBank={mcqBank} />}
        {testFinished && (
          <>
            <h1>Dear, your score is {result}</h1>
            <ul>
              {subjectScores.map((elm) => (
                <li
                  key={elm.subject}
                >{`${elm.subject}:${elm.score}/${elm.total}`}</li>
              ))}
            </ul>
          </>
        )}
        ;
      </testContext.Provider>
    </>
  );
};

export default App;
