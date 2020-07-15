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

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      getAnimation().play();
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
      <h1>Press Right Arrow to Move</h1>
      <div className="box" ref={ref}></div>
      <div className="ground"></div>
    </div>
  );
}

export default App;
