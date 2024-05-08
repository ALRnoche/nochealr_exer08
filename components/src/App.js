import './App.css';

import React from 'react';

import NavBar from './NavBar';
import ItemsList from './ItemsList';

function App() 
{
  return (
    <div>
      <div className = "Header">
        <header>Lazado™</header>
        <NavBar data = {MenuChoices}/>
      </div>

      <div className = "Body">
        <ItemsList data = {Appliances}/>
      </div>
    </div>
  );
}
export default App;

const MenuChoices = 
[
  { name: "APPLIANCES", url: "#", id: 1 },
  { name: "GROCERIES", url: "#", id: 2 },
  { name: "ACCESSORIES", url: "#", id: 3 },
  { name: "APPAREL", url: "#", id: 4 }
];

const Appliances =
[
  { 
    name: "Hanabishi Ground Fan Hurricane", 
    url: "https://myhanabishi.com/cdn/shop/products/HHURRIC20.png?v=1689151695", 
    id: 1
  },
  
  { 
    name: "Whirpool Auto Washing Machine", 
    url: "https://jnrappliances.com.ph/wp-content/uploads/2021/08/Website-Photo-Whirlpool-4.png", 
    id: 2 
  },

  {
    name: "KitchenAid Pro Line Blender", 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1ehwrmD6BDXqjj0p4FuqXHQuE8mGKRV3LF52L0WClA&s", 
    id: 3 
  },

  {
    name: "Tough Mama Rice Cooker", 
    url: "https://toughmamaappliances.com/wp-content/uploads/2019/11/NRC1M-with-slot-handle-lr-.jpg", 
    id: 4
  }
]