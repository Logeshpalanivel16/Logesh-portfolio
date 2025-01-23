import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"; 

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setShowButton(true); 
      } else {
        setShowButton(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div>
      {showButton && (
        <Button
          onClick={scrollToTop}
          style={{
            position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#000",
    color: "#fff",
    padding: "2px 10px", 
    fontSize: "24px", 
    fontWeight: "bold", 
          }}
        >
          ↑
        </Button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
