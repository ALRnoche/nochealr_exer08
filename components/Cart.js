import { useState } from "react";

export function Cart() {
    const [cartItems, setCartItems] = useState([]); //store items in the cart
    const [itemCount, setItemCount] = useState({}); //store count of each item in the cart
    const [totalItems, setTotalItems] = useState(0); //store total number of items in the cart

    function addItems(item)
    {
        if (cartItems.includes(item)) //check if there are existing added items
        {
            setItemCount(prevCount => //get recent item count then iterate number of newly added items
            ({
                ...prevCount,
                [item.id]: (prevCount[item.id] || 0) + 1
            }));
        } 
        
        else
        { //if not, add with count 1
            setCartItems(prevItems => [...prevItems, item]);
            setItemCount(prevCount => 
            ({
                ...prevCount,
                [item.id]: 1
            }));
        }
        // for every added item, console log and update number of total items
        setTotalItems(prevTotalItems => prevTotalItems + 1);
        console.log(`Added ${item.name} to cart!`);
    }

    function deleteItem(item) 
    {
        setCartItems(prevItems => 
        {
            // filter out item being deleted
            const updatedItems = prevItems.filter(cartItem => cartItem.id !== item.id);
            const updatedCount = { ...itemCount };
            
            // decrement item count
            if (updatedCount[item.id] > 1) updatedCount[item.id]--; 
            
            else delete updatedCount[item.id];
            
            // update item count state
            setItemCount(updatedCount);
            
            return updatedItems;
        });
        
        // decrement total items count
        setTotalItems(prevTotalItems => prevTotalItems - (itemCount[item.id] || 1));
    }

    // return cart state & fxns for external use
    return { cartItems, addItems, deleteItem, itemCount, totalItems };
}