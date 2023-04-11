import React, { createContext, useState, useEffect } from "react";

const MobileContext = createContext();

const MobileContextProvider = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {props.children}
    </MobileContext.Provider>
  );
};

export { MobileContext, MobileContextProvider };
