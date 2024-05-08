import React, { useState } from "react";
import './App.css';

function NavBar(props) {
    const [chosenClass, setchosenClass] = useState(null); // Selected class (category) tracker

    const handleItemClick = (category) =>
    {
        setchosenClass(category); // Update selected class
    };

    return (
        <div className="boxes">
            {
                props.data.map((category) => (
                    <button
                        key={category.id}
                        className={`Types ${chosenClass === category ? 'selected' : ''}`} // Prompt to change class and color to distinguish the changes
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