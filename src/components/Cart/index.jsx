import "./style.css";
const Cart = ({ listCart, totalCart, setTotalCart, setListCart }) => {
  const removeCart = (prod) => {
    setListCart(listCart.filter((e) => e != prod));
  };
  return (
    <div className="containerCart">
      <p>Carrinho de compras</p>
      {listCart.length === 0 ? (
        <div className="emptyCart">
          <p className="firstP">Sua sacola está vazia</p>
          <p className="secondP">Adicione itens</p>
        </div>
      ) : (
        <>
          <div className="cartProducts">
            {listCart &&
              listCart.map((element) => {
                return (
                  <div className="divCart">
                    <div className="imgInfos">
                      <figure>
                        <img src={element.img} alt="" />
                      </figure>
                      <div className="divInfosCart">
                        <span className="spanName">{element.name}</span>
                        <span className="spanCategory">{element.category}</span>
                      </div>
                    </div>
                    <button
                      id={element.id}
                      onClick={(e) => removeCart(element)}
                    >
                      Remover
                    </button>
                  </div>
                );
              })}
          </div>
          <div className="cartValue">
            <span className="valueLegenda">Total</span>
            <span className="value">R$ {totalCart.toFixed(2)}</span>
          </div>
          <button className="removeAll" onClick={() => setListCart([])}>
            Remover todos
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
