import Products from "../Products";
import "./style.css";
const ProductsList = ({ listProducts, setListProducts, addCart }) => {
  return (
    <div className="containerProducts">
      {listProducts.map((element) => (
        <div className="divProduct" key={element.id}>
          <Products product={element} addProd={addCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
