import "./style.css";
const Header = ({ setInput, mostrar, valorInput }) => {
  return (
    <div className="divHeader">
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div>
        <input
          placeholder="Digitar Pesquisa"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            mostrar(valorInput);
          }}
        />
        <button onClick={() => mostrar(valorInput)}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Header;
