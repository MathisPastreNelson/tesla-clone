import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ModelY from "../components/ModelY";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

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

    const handleTouchStart = (event) => {
      const { touches } = event;
      setTouchStartY(touches[0].clientY);
    };

    const handleTouchEnd = (event) => {
      const { changedTouches } = event;
      const touchEndY = changedTouches[0].clientY;

      if (touchEndY > touchStartY) {
        setScrollPosition((prevPosition) => prevPosition - window.innerHeight);
      } else {
        setScrollPosition((prevPosition) => prevPosition + window.innerHeight);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartY]);

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
