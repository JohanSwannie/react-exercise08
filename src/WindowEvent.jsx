import { useState, useEffect } from "react";

const WindowEvent = () => {
  const [counter, setCounter] = useState(0);

  const addPElement = () => {
    if (counter > 5) {
      const deleteThem = document.querySelectorAll("children");
      deleteThem.forEach((kid) => kid.remove());
    } else {
      const daddy = document.querySelector(".daddy");
      const child = document.createElement("p");
      child.setAttribute("class", "children");
      child.innerHTML = "Another Child";
      daddy.appendChild(child);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  useEffect(() => {
    const doubleClick = () => addPElement();
    window.addEventListener("dblclick", doubleClick);
    return () => window.removeEventListener("dblclick", doubleClick);
  });

  return (
    <div className="daddy">
      <p>Window Event is now Active - You may now double click</p>
    </div>
  );
};

export default WindowEvent;
