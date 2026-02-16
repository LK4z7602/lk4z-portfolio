import { useState, useEffect } from "react";

const useResponsiveIconSize = (baseSize: number) => {
  const [size, setSize] = useState(baseSize);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      let multiplier: number;

      switch (true) {
        case width < 640:
          multiplier = 0.85;
          break;
        case width < 768:
          multiplier = 1;
          break;
        case width < 1024:
          multiplier = 1.15;
          break;
        case width < 1240:
          multiplier = 1.4;
          break;
        default:
          multiplier = 1.45;
      }

      setSize(Math.round(baseSize * multiplier));
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [baseSize]);

  return size;
};

export default useResponsiveIconSize;
