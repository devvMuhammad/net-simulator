import { createContext } from "react";

const HaramiContext = createContext({
  saveEnabled: false,
  setSaveEnabled: () => {},
});

export default HaramiContext;
