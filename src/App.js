import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useWebAnimation from "@wellyshen/use-web-animations";

function App() {
  const { ref, animate, getAnimation } = useWebAnimation({
    keyframes: [
      {
        backgroundPosition: 0,
      },
      {
        backgroundPosition: "624px",
      },
    ],
    timing: {
      duration: 1000,
      easing: "steps(6)",
    },
  });
  const { ref: bgRef, getAnimation: getBgAnim } = useWebAnimation({
    keyframes: [
      {
        backgroundPosition: 0,
      },
      {
        backgroundPosition: "-500px",
      },
    ],
    timing: {
      duration: 1000,
      easing: "linear",
    },
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      getAnimation().play();
      getBgAnim().play();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div className="bg">
      <div src="/cloud.png" ref={bgRef} className="cloud" />
      <div className="box" ref={ref}></div>
    </div>
  );
}

export default App;
