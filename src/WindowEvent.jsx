import { useState, useEffect } from "react";

const WindowEvent = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  const addPElement = () => {
    if (counter > 7) {
      const deleteThem = document.querySelectorAll(".children");
      deleteThem.forEach((kid) => kid.remove());
      setCounter(1);
      setCounter2((prevCounter2) => prevCounter2 + 1);
    } else {
      const daddy = document.querySelector(".daddy");
      const child = document.createElement("p");
      child.setAttribute("class", "children");
      child.innerHTML = `Another Child ${counter}`;
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
      THE WINDOW EVENT IS NOW ACTIVE - ROUND NUMBER {counter2}
    </div>
  );
};

export default WindowEvent;
