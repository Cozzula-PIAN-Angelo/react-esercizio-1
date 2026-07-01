import { useState } from "react";

const Contatore = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumenta</button>
      <button onClick={() => setCount(count - 1)}>Diminuisce</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Contatore;
