import { useShoppingCart } from "@alwaystudios/as-ui-components";
import React, { Profiler } from "react";
import { ItemComponent } from "./components/ItemComponent";
import { StickySidebar } from "./components/StickySidebar";
import { MyComponent } from "./components/TestComponent";
import { testProduct, Product } from "./types";
import "./App.css";

const products = [...Array(20)].map(testProduct);

const App = () => {
  const { updateCart, removeProduct, items } = useShoppingCart<Product>();

  // https://reactjs.org/docs/profiler.html
  const onRender = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: Set<any>
  ) => {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );
  };

  return (
    <>
      <header></header>
      <main>
        <Profiler id="myapp" onRender={onRender}>
          <article className="article">
            <h2>Online store</h2>
            <MyComponent />
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
        </Profiler>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
