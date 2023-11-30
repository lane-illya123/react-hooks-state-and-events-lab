import React, {useState} from "react";

function Item({ name, category }) {
  //
  const [inCart, setCart] = useState(false)

  const className = inCart ? "in-cart" : " "

  function handleClick(){
    setCart(!inCart)
  }
  
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
