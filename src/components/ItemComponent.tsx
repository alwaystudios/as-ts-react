import React, { FunctionComponent } from "react";
import { Product } from "../types";

type Props = {
  product: Product;
  quantity?: number;
  onClick?: () => void;
};

export const ItemComponent: FunctionComponent<Props> = ({
  product,
  onClick,
  quantity,
}) => (
  <li onClick={onClick} key={product.id}>
    <button className="item">
      <img
        className="thumbnail"
        src="https://ixxidesign.azureedge.net/media/1676571/Mickey-Mouse-2.jpg?width=562"
        alt="mm"
      />
      <div className="info">
        <div className="title">{product.title}</div>
        <div className="subtitle">{product.subtitle}</div>
        {quantity && <div className="subtitle">{quantity}</div>}
      </div>
    </button>
  </li>
);
