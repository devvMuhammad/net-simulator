import React, { useState } from "react";
import Test from "./Test";
import mcqBank from "./mcqArray";
import testContext from "./testContext";
import Result from "./components/Result";

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
        {testFinished && <Result subjectScores={subjectScores} />};
      </testContext.Provider>
    </>
  );
};

export default App;
