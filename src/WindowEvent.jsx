import { useEffect } from "react";

const WindowEvent = () => {
  useEffect(() => {
    const doubleClick = () => alert("Mouse has been double clicked!");
    window.addEventListener("dblclick", doubleClick);
    return () => window.removeEventListener("dblclick", doubleClick);
  });
  return <div>Window Event is now Active</div>;
};

export default WindowEvent;
