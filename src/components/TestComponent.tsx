import React, { useRef, useState } from "react";
import { useOutsideClick } from "./useOutsideClick";

export const MyComponent = () => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setToggle(!toggle);
  });

  return (
    <div ref={ref}>{toggle ? <div>toggle ON</div> : <div>toggle OFF</div>}</div>
  );
};
