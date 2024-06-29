import { useState, useRef, useEffect } from "react";

/**
 * custom hook
 * 용도 : 화면 사이즈 측정
 */
function useComponentSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const componentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } =
        componentRef.current?.getBoundingClientRect() ?? {
          width: 0,
          height: 0,
        };
      setSize({ width, height });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [componentRef, size];
}

export default useComponentSize;
