import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ModelY from "../components/ModelY";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const { deltaY } = event;

      if (deltaY > 0) {
        setScrollPosition((prevPosition) => prevPosition + window.innerHeight);
      } else {
        setScrollPosition((prevPosition) => prevPosition - window.innerHeight);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setScrollPosition((prevPosition) => prevPosition + window.innerHeight);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setScrollPosition((prevPosition) => prevPosition - window.innerHeight);
      }
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
      const { touches } = event;
      const { clientY } = touches[0];

      if (clientY < window.innerHeight / 2) {
        setScrollPosition((prevPosition) => prevPosition - window.innerHeight);
      } else {
        setScrollPosition((prevPosition) => prevPosition + window.innerHeight);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }, [scrollPosition]);

  return (
    <div>
      <Header />
      <div style={{ height: "100vh" }}>
        <ModelY />
      </div>
      <div style={{ height: "100vh" }}>
        <ModelY />
      </div>
      <div style={{ height: "100vh" }}>
        <ModelY />
      </div>
      <Footer />
    </div>
  );
}
