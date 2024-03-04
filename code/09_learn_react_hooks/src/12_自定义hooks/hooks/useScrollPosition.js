import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScrollPosition(e) {
      // console.log(e);
      // console.log(window.scrollX,window.scrollY);
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  });

  return [scrollX, scrollY];
}

export default useScrollPosition;
