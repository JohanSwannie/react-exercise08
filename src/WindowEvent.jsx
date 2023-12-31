import { useState, useEffect } from "react";

const WindowEvent = () => {
  const [counter, setCounter] = useState(0);

  const addPElement = () => {
    if (counter > 7) {
      const deleteThem = document.querySelectorAll(".children");
      deleteThem.forEach((kid) => kid.remove());
      setCounter(0);
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

  return <div className="daddy">THE WINDOW EVENT IS NOW ACTIVE !</div>;
};

export default WindowEvent;
