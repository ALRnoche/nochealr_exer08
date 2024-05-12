import './App.css';
import React from 'react';
import { Cart } from "./Cart";

function ItemsList(props) {
    const { cartItems, addItems, deleteItem, itemCount, totalItems } = Cart(); // cart object

    return (
        <div className="boxes"> 
            {
                // get id, name, and url of called const from App.js
                props.data.map((item) => (
                    <div key={item.id}>
                        <div className="itms"> 
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
                    {
                        cartItems.map((cartItem) => (
                            <li key={cartItem.id} className="cart_itms">
                                {cartItem.name}
                                <br></br>
                                QTY No.:{itemCount[cartItem.id]}
                                <button className="btns" onClick={() =>
                                {
                                    deleteItem(cartItem);
                                }}>
                                    <img className="del_btn" src= "https://www.iconsdb.com/icons/preview/white/trash-2-xxl.png" alt="X"/>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default ItemsList;