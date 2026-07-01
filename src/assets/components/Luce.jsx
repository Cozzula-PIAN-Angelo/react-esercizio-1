import { useState } from "react";

const Luce = () => {
  const [accesa, setAccesa] = useState(false);
  return (
    <div>
      <button onClick={() => setAccesa(!accesa)}>Accendi/Spegni</button>
      {accesa ? <p>luce accesa</p> : <p>luce spenta</p>}
    </div>
  );
};

export default Luce;
