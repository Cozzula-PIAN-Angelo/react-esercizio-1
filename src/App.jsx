import Profilo from "./assets/components/profilo";
import Contatore from "./assets/components/Contatore";
import Luce from "./assets/components/Luce";
import ListaFrutti from "./assets/components/ListaFrutti";
import InputTesto from "./assets/components/InputTesto";

const App = () => {
  return (
    <div>
      <Profilo nome="Angelo" eta="30" cognome="Cozzula" citta="roma" />
      <Contatore />
      <Luce />
      <ListaFrutti />
      <InputTesto />
    </div>
  );
};

export default App;
