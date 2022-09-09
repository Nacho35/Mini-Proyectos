import React, { useState } from "react";

const Contador = () => {
  const [numero, setnumero] = useState(0);

  const aumentar = () => {
    setnumero(numero + 1);
  };

  const reset = () => {
    setnumero(numero - 1);
  };

  return (
    <div className="grid-container">
      <div>
        <h1 className="text">{numero}</h1>
      </div>
      <div className="container-btn">
        <button
          className="hvr-float-shadow btn-n hvr-back-pulse"
          onClick={aumentar}
        >
          AUMENTAR
        </button>

        <button
          className="hvr-float-shadow btn-n hvr-back-pulse"
          onClick={reset}
        >
          DISMINUIR
        </button>
      </div>
    </div>
  );
};

export default Contador;
