import { useState } from "react";

const InputTesto = () => {
  const [testo, setTesto] = useState(" ");
  return (
    <div>
      <input
        type="text"
        value={testo}
        onChange={(e) => setTesto(e.target.value)}
      />
      <p>{testo}</p>
    </div>
  );
};

export default InputTesto;
