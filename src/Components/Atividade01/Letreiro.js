import { useState, useEffect } from "react";

function Letreiro() {

  const [temp, setTemp] = useState('');

  useEffect(() => {
    let frase = "Conheça a Fatec";
    let substring = "";
    let index = 0;
    let direction = "right";

    setInterval(() => {
      substring = frase.substring(0, index);
      if (direction === "right") {
        index++;
        if (index > frase.length) {
          index = frase.length;
          direction = "left";
        }
      } else {
        index--;
        if (index < 1) {
          index = 1;
          direction = "right";
        }
      }
      setTemp(substring);
    }, 150);
  }, []);

  return (
    <div class="letreiro">
      <h3>{temp}</h3>
    </div>
  );
}

export default Letreiro;