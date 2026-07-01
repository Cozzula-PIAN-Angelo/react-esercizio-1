// =============================
// METODO 1 — oggetto props
// =============================
/*
const ProfiloA = (props) => {
  return (
    <div>
      <h1>
        {props.nome} {props.cognome}
      </h1>
      <p>Età: {props.eta}</p>
      <p>Città: {props.citta}</p>
    </div>
  );
};
*/

// =============================
// METODO 2 — destructuring
// =============================
const ProfiloB = ({ nome, cognome, eta, citta }) => {
  return (
    <div>
      <h1>
        {nome} {cognome}
      </h1>
      <p>Età: {eta}</p>
      <p>Città: {citta}</p>
    </div>
  );
};

export default ProfiloB;
// Entrambi si usano allo stesso modo in App.jsx:
// <ProfiloA nome="Angelo" cognome="Cozzula" eta="30" citta="Roma" />
// <ProfiloB nome="Angelo" cognome="Cozzula" eta="30" citta="Roma" />
