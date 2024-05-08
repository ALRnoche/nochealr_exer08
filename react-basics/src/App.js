import React from 'react';
import TempConverter from './TempConverter.js';
import NavigationItem from './NavigationItem.js';
import Counter from './Counter.js';
import './App.css';

// add also header and title of website
//add Appliances, Gadgets, and Accessories buttons here
function App() 
{
  return (
    <div>
      <div>
        <header className='header'>
        <h1 className='shop'>Lazado</h1>
        <div className='banner'>
        <nav>
          <ul>
            {menus.map((item) => (
              <li key={item.id}>
                <a href='#'>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        </header>
        <body>
        <NavigationItem data={menus} title={'Menu Items'}/>
        <Counter val={0}/>
        </body>
      </div>
      <div>
      <TempConverter/>
      </div>
    </div>
  );
}

export default App;

const menus = 
[
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Accessories", url: "#", id: 4 },
];

const Appliances =
[
  { name: "Hanabishi Ground Fan Hurricane", 
  url: "https://myhanabishi.com/cdn/shop/products/HHURRIC20.png?v=1689151695", 
  id: 1 },
  
  { name: "Whirlool Automatic Washing Machine", 
  url: "https://jnrappliances.com.ph/wp-content/uploads/2021/08/Website-Photo-Whirlpool-4.png", 
  id: 2 },

  { name: "KitchenAid Pro Line Blender", 
  url: "https://www.cnet.com/a/img/resize/efa85e1b27461d68ac25764ce50f3692a3f5da37/hub/2017/05/10/6dd6d29e-422f-4d71-8793-9bfc1e1ce758/kitchenaidblender-1.jpg?auto=webp&width=768", 
  id: 3 },

  { name: "Tough Mama Rice Cooker", 
  url: "https://toughmamaappliances.com/wp-content/uploads/2019/11/NRC1M-with-slot-handle-lr-.jpg", 
  id: 4 },
]

const Groceries =
[
  { name: "Authentic A5 Japanese Wagyu Ribeye Steak", 
  url: "https://www.tenderbites.ph/media/catalog/product/cache/6658c6986eb36f9bee022e602f6cd310/0/8/08004f_420dc37f87e14ebf84f42e3bf4cd3b92mv2_k9p11n3vd7qhwgzg.jpg", 
  id: 1 },
  
  { name: "Harvester's Special Dinorado", 
  url: "https://sunnywoodrice.com/wp-content/uploads/2019/03/Harvesters-Dinorado-2018-2kg.jpg", 
  id: 2 },

  { name: "Heinz Tomato Ketchup", 
  url: "https://i5.walmartimages.com/seo/Heinz-Tomato-Ketchup-20-oz-Bottle_df19e3bc-27e9-4d72-8f83-eb86862ffb00.c02e78adf42a1c126ca71c6e0946c298.jpeg", 
  id: 3 },

  { name: "Pringles Hot & Spicy", 
  url: "https://i.ebayimg.com/images/g/upcAAOSwZAtk07ky/s-l1600.jpg", 
  id: 4 },
]

const Accessories =
[
  { name: "Marathon Digital 33mm Resin Band", 
  url: "https://cdn.shopify.com/s/files/1/0480/6144/8344/products/TW00A300E-1.jpg?v=1608632956", 
  id: 1 },
  
  { name: "Spot Pandora Tree of Life Necklace", 
  url: "https://img.ws.mms.shopee.ph/c6d0c0ebd0d6706551ea1fc3d15072d0", 
  id: 2 },

  { name: "Top Flight Automotive Cap", 
  url: "https://assets.aaadirect.com/product-images/TF0005_1.jpg", 
  id: 3 },

  { name: "Ray-Ban Aviator Classic Sunglasses", 
  url: "https://rustans.com/cdn/shop/products/2167411_76bfc8e6-647e-456b-b88b-fdd339b5d46a.jpg?v=1661414716&width=540", 
  id: 4 },
]