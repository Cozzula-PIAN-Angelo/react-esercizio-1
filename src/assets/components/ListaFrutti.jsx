const ListaFrutti = () => {
  const frutti = ["Mela", "Banana", "Kiwi", "Melone"];
  return (
    <ul>
      {frutti.map((frutto, index) => (
        <li key={index}>{frutto}</li>
      ))}
    </ul>
  );
};

export default ListaFrutti;
