import React, { FunctionComponent } from "react";
import { Product } from "../types";
import { ItemComponent } from "./ItemComponent";

type Props = {
  onRemove: (product: Product) => void;
  items: Record<
    number,
    {
      product: Product;
      quantity: number;
    }
  >;
};

export const StickySidebar: FunctionComponent<Props> = ({
  onRemove,
  items,
}) => {
  return (
    <aside className="sidebar">
      <div className="component">
        <div className="header">Selected Items</div>
        <div className="content">
          {!Object.values(items).length && (
            <div className="empty-text">Your cart is currently empty</div>
          )}
          <ul className="items list">
            {Object.values(items).map((item) => (
              <ItemComponent
                onClick={() => onRemove(item.product)}
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </ul>
        </div>
        <div className="footer">
          <button className="button">Checkout</button>
          <button className="button empty-cart">Empty Cart</button>
        </div>
      </div>
    </aside>
  );
};
