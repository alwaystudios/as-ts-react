import { useShoppingCart } from "@alwaystudios/as-ui-components";
import React from "react";
import "./App.css";
import { ItemComponent } from "./components/ItemComponent";
import { StickySidebar } from "./components/StickySidebar";
import { Product, testProduct } from "./types";

const products = [...Array(20)].map(testProduct);

const App = () => {
  const { updateCart, removeProduct, items } = useShoppingCart<Product>();

  return (
    <>
      <header></header>
      <main>
        <article className="article">
          <h2>Online store</h2>
          <ul className="items grid">
            {products.map((item) => (
              <ItemComponent
                onClick={() => updateCart(item)}
                key={item.title}
                product={item}
              />
            ))}
          </ul>
        </article>
        <StickySidebar onRemove={removeProduct} items={items} />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
