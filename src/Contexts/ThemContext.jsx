import { createContext, useState } from "react";

const ThemContext = createContext();
const ThemContextProvider = ({ children }) => {
  const [isActive, setisActive] = useState(true);
  const toggle = () => {
    setisActive((pre) => !pre);
  };

  return (
    <ThemContext.Provider value={{ isActive, toggle }}>
      {children}
    </ThemContext.Provider>
  );
};
export { ThemContext, ThemContextProvider };
