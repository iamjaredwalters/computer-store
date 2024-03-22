import { useState } from "react";
import "./App.css";
import { Nav } from "./Nav";
import { Results } from "./Results";

export type Product = {
  title: string;
  price: string;
  vendor: string;
  strikedPrice: string;
  image: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <>
      <Nav setProducts={setProducts} />
      <Results products={products} />
    </>
  );
}

export default App;
