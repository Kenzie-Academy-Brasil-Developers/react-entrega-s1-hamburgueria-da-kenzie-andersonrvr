import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (inputValue === "") setFilteredProducts(products);
  }, [inputValue]);
  useEffect(() => {
    setFilteredProducts([...products]);
  }, [products]);
  useEffect(() => {
    setCartTotal(currentSale.reduce((acc, value) => acc + value.price, 0));
  });

  const showProducts = (iptValue) => {
    setFilteredProducts(
      products.filter(
        (e) =>
          e.name.toLowerCase().includes(iptValue.toLowerCase()) ||
          e.category.toLowerCase().includes(iptValue.toLowerCase())
      )
    );
  };
  const notify = () =>
    toast("Não é possivel adicionar dois produtos iguais ao carrinho.");
  const handleClick = (id) => {
    let prodToAdd = products.find((e) => e.id == id);
    if (currentSale.includes(prodToAdd) === false) {
      setCurrentSale([...currentSale, prodToAdd]);
    } else {
      notify();
      console.log("vai da nao");
    }
  };

  return (
    <div className="App">
      <header>
        <Header
          setInput={setInputValue}
          mostrar={showProducts}
          valorInput={inputValue}
        />
      </header>
      {inputValue !== "" ? (
        <div className="resultSearch">
          Resultados para: <span>{inputValue}</span>
        </div>
      ) : (
        <></>
      )}
      <div className="divBody">
        <ProductsList
          listProducts={filteredProducts}
          setListProducts={setFilteredProducts}
          addCart={handleClick}
        />
        <Cart
          setListCart={setCurrentSale}
          listCart={currentSale}
          totalCart={cartTotal}
          setTotalCart={setCartTotal}
        />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
