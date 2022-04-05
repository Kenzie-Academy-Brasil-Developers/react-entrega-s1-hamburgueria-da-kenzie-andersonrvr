const Products = ({ product, addProd }) => {
  return (
    <>
      <figure>
        <img src={product.img} alt="" />
      </figure>
      <p className="productName">{product.name}</p>
      <p className="productCategory">{product.category}</p>
      <span className="productPrice">R$ {product.price.toFixed(2)}</span>
      <button
        id={product.id}
        className="productButton"
        onClick={(e) => addProd(e.target.id)}
      >
        Adicionar
      </button>
    </>
  );
};

export default Products;
