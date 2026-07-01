import Profilo from "./assets/components/profilo";
import Contatore from "./assets/components/Contatore";
import Luce from "./assets/components/Luce";
import ListaFrutti from "./assets/components/ListaFrutti";

const App = () => {
  return (
    <div>
      <Profilo nome="Angelo" eta="30" cognome="Cozzula" citta="roma" />
      <Contatore />
      <Luce />
      <ListaFrutti />
    </div>
  );
};

export default App;
