import { useState, useEffect } from "react";

const WindowEvent = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [bg, setBg] = useState("black");

  const colors = ["red", "navy", "rebeccapurple", "green", "purple", "orange"];

  const addPElement = () => {
    if (counter > 7) {
      const deleteThem = document.querySelectorAll(".children");
      deleteThem.forEach((kid) => kid.remove());
      setCounter(1);
      setCounter2((prevCounter2) => prevCounter2 + 1);
      const newBackground = colors[Math.floor(Math.random() * colors.length)];
      setBg(newBackground);
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
    const clicked = () => addPElement();
    window.addEventListener("click", clicked);
    return () => window.removeEventListener("click", clicked);
  });

  return (
    <div className="daddy">
      THE WINDOW EVENT IS NOW ACTIVE -{" "}
      <span
        id="spanner"
        style={{
          backgroundColor: `${bg}`,
          color: "white",
          padding: "1rem",
        }}
      >
        ROUND NUMBER {counter2}
      </span>
    </div>
  );
};

export default WindowEvent;
