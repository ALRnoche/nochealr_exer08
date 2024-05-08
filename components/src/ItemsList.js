import React from 'react';
import './App.css';
import { ShoppingCart } from "./ShoppingCart";

function ItemsList(props) {
    const { cartItems, addItems, deleteItem, itemCount, totalItems } = ShoppingCart();

    return (
        <div className="boxes"> 
            {
                props.data.map((item) => (
                    <div key={item.id}>
                        <div className="Items"> 
                            <p>{item.name}</p>
                            {item.url && <img className="img" src={item.url} alt={item.name} />}
                            <button className="btns" onClick={() => addItems(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
            <div className="cart">
                <h3> Shopping Cart (Total Items: {totalItems}) </h3>
                <ul className="cart">
                    {cartItems.map((cartItem) => (
                        <li key={cartItem.id} className="cartItems">
                            {cartItem.name}
                            <br></br>
                            QTY:{itemCount[cartItem.id]}
                            <button className="btns" onClick={() =>
                            {
                                deleteItem(cartItem);
                            }}>
                                <img className="deletebutton" src= "https://www.iconsdb.com/icons/preview/white/trash-2-xxl.png" alt="X"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ItemsList;