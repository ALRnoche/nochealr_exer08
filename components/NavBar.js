import './App.css';
import React, { useState } from "react";

function NavBar(props) 
{
    const [chosenClass, setchosenClass] = useState(null); // Selected class (category) tracker

    const handleItemClick = (category) =>
    {
        setchosenClass(category); // Update selected category
    };

    // override changes
    return (
        <div className="boxes">
            {
                props.data.map((category) => (
                    <button
                        key={category.id} //either 'Class' or 'Class selected'
                        className={`Class ${chosenClass === category ? 'selected' : ''}`} // Prompt to change class and color to distinguish the changes
                        onClick={() => handleItemClick(category)}
                    >
                        {category.name}
                    </button>
                ))
            }
        </div>
    );
}

export default NavBar;