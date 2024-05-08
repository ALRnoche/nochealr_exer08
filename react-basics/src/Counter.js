import { useState } from "react";

export default function Counter(props) 
{
    function addValue(){
       setVal((prev)=> prev +1)    
    }

    //for every added items to cart, console log kung ano ung added items
    const [val, setVal] = useState(props.val);
    return (
        <>
            <h1>Shopping cart (Total: {val})</h1>
            <button onClick= {() => {
                addValue()
            }}>Add to cart</button>
        </>
    );
}