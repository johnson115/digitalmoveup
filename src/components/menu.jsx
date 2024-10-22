import React from 'react';
import { Coffee, Sandwich, IceCream, Cake, Heart } from 'lucide-react';
import "./menu.css";
import Header from "./header.jsx";
import { useState } from 'react';
import { useEffect } from 'react';




const desserts = [
  { name: "Gâteau au Fromage", price: "1.99", image: "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhdGVhdSUyMGF1JTIwZnJvbWFnZXxlbnwwfHwwfHx8MA%3D%3D" },
 
  { name: "Brownie", price: "4.99", image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Fudge au Chocolat", price: "1.99", image: "https://images.unsplash.com/photo-1583528225108-295481722b35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnVkZ2UlMjBhdSUyMENob2NvbGF0fGVufDB8fDB8fHww" },

  { name: "Gâteau au Fromage aux Baies", price: "1.99", image: "https://images.unsplash.com/photo-1668441294583-bebe5e21bb63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEclQzMlQTJ0ZWF1JTIwYXUlMjBGcm9tYWdlJTIwYXV4JTIwQmFpZXN8ZW58MHx8MHx8fDA%3D" },
  { name: "Gâteau au chocolat", price: "3.99", image: "https://images.unsplash.com/photo-1682596044375-eb3c629fd9e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdhdGVhdSUyMGF1JTIwY2hvY29sYXR8ZW58MHx8MHx8fDA%3D" },
  { name: "Crepe au chocolat", price: "4.99", image: "https://images.unsplash.com/photo-1515467837915-15c4777ba46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JlcGUlMjBhdSUyMGNob2NvbGF0fGVufDB8fDB8fHww" }
];

const cafeChaud = [
  { name: "Cappuccino", price: "1.99", image: "https://images.unsplash.com/photo-1499961524705-bfd103e65a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENhcHB1Y2Npbm98ZW58MHx8MHx8fDA%3D" },
  { name: "Capussin", price: "2.99", image: "https://images.unsplash.com/photo-1666600638856-dc0fb01c01bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhZiVDMyVBOSUyMGF1JTIwTGFpdHxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Café Velouté", price: "4.99", image: "https://www.lidealdesgourmands.com/shop/orgeval/6283-large_default/cafe-long.jpg" },
  { name: "Direct", price: "1.99", image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsYXQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Chocolate chaud", price: "3.99", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2hhdWR8ZW58MHx8MHx8fDA%3D" },
  { name: "Expresso", price: "1.99", image: "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwcmVzc298ZW58MHx8MHx8fDA%3D" },
  { name: "Latte à la Vanille", price: "3.99", image: "https://images.unsplash.com/photo-1550991004-adb23f68241d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fExhdHRlJTIwJUMzJUEwJTIwbGElMjBWYW5pbGxlfGVufDB8fDB8fHww" },

  { name: "Café Filtre", price: "4.99", image: "https://images.unsplash.com/photo-1694423208083-2b6954bd324e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fENhZiVDMyVBOSUyMEZpbHRyZXxlbnwwfHwwfHx8MA%3D%3D" }
];

const cafeFroid = [
  { name: "Milk-shake ", price: "1.99", image: "https://images.unsplash.com/photo-1586985289071-36f62f55ce44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlsayUyMHNoYWtlfGVufDB8fDB8fHww" },
  { name: "Café Glacé", price: "2.99", image: "https://img.freepik.com/photos-gratuite/frappuccino-aromatique-table_23-2148900666.jpg?ga=GA1.1.905730027.1725538837&semt=ais_hybrid" },
  { name: "Coupe De Glace", price: "4.99", image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdXBlJTIwZGUlMjBnbGFjZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Thé Glacé", price: "1.99", image: "https://img.freepik.com/photos-gratuite/the-glace-fait-maison-herbes-du-citron-dessus_140725-3424.jpg?ga=GA1.1.905730027.1725538837&semt=ais_hybrid" },
  { name: "Jus de  Fraise", price: "3.99", image: "https://t4.ftcdn.net/jpg/09/03/08/19/240_F_903081974_hs5jYjRSDbl3v6gprPZdFt4Zn57IbZm8.jpg" },
  { name: "Jus de Orange", price: "1.99", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8anVzJTIwZGUlMjBvcmFuZ2V8ZW58MHx8MHx8fDA%3D" },
  { name: "Jus de Banane", price: "3.99", image: "https://images.unsplash.com/photo-1685967836529-b0e8d6938227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anVzJTIwZGUlMjBCYW5hbmV8ZW58MHx8MHx8fDA%3D" },
  { name: "Jwejem", price: "4.99", image: "https://th.bing.com/th/id/OIP.5B3tiCKeFH7KBEYvWFxO7wHaNL?w=750&h=1334&rs=1&pid=ImgDetMain" }
];


const collations = [
  { name: "Sandwich", price: "1.99", image: "https://images.unsplash.com/reserve/jCCsCae7RwCDOKTCA2Ji_reggeli%20-%20sonk%C3%A1s%20szendvics.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbmR3aWNoJTIwYmFndWV0dGV8ZW58MHx8MHx8fDA%3D" },
  { name: "Crepe", price: "2.99", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Libanais sandwich", price: "1.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_DyC8n2_kgTiUdzO5LSXTgpg2M_W9YQWXg&s" },
  { name: "Burger ", price: "3.99", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Pizza fruit de mer", price: "1.99", image: "https://images.unsplash.com/photo-1652952561151-97e82f26c336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBmcnVpdCUyMGRlJTIwbWVyfGVufDB8fDB8fHww" },
  { name: "Pizza margherita", price: "3.99", image: "https://images.unsplash.com/photo-1664309641932-0e03e0771b97?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Pizza Neptune", price: "4.99", image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwbmVwdHVuZXxlbnwwfHwwfHx8MA%3D%3D" },
];







const MenuItem = ({ id, name, price, image }) => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/api/favorites/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFavoriteCount(data.count || 0);
      })
      .catch((error) => console.error('Error fetching favorite count:', error));

    const likedItems = JSON.parse(localStorage.getItem('likedItems') || '{}');
    setUserLiked(!!likedItems[id]);
  }, [id]);

  const toggleFavorite = () => {
    const newCount = userLiked ? favoriteCount - 1 : favoriteCount + 1;
    const newUserLiked = !userLiked;

    setFavoriteCount(newCount);
    setUserLiked(newUserLiked);

    fetch(`http://localhost:3000/api/favorites/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count: newCount }),
    }).catch((error) => console.error('Error updating favorite count:', error));

    const likedItems = JSON.parse(localStorage.getItem('likedItems') || '{}');
    if (newUserLiked) {
      likedItems[id] = true;
    } else {
      delete likedItems[id];
    }
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  };

  return (
    <div className="flex items-center mb-4 bg-secondary rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative w-24 h-24">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <span className="absolute bottom-1 right-1 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
          {price} TND
        </span>
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <div className="relative mr-5">
        <Heart
          className="cursor-pointer transition-colors duration-200"
          onClick={toggleFavorite}
          fill={userLiked ? "#da9f5b" : "none"}
          color={userLiked ? "#da9f5b" : "currentColor"}
          size={24}
        />
        {favoriteCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            {favoriteCount}
          </span>
        )}
      </div>
    </div>
  );
};

const MenuSection = ({ title, items, icon: Icon }) => (
  <div className="w-full md:w-1/2 px-4 mb-8">
    <h2 className="text-2xl font-bold mb-4 text-[#422a24] border-b-2 border-primary pb-2 flex items-center">
      <Icon className="mr-2" size={24} />
      {title}
    </h2>
    <div className="grid gap-4">
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          id={`${title.toLowerCase().replace(' ', '-')}-${index}`}
          {...item} 
        />
      ))}
    </div>
  </div>
);

export default function CoffeeMenu() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap pt-10 -mx-4">
          <MenuSection title="Café Chaud" items={cafeChaud} icon={Coffee} />
          <MenuSection title="Café Froid" items={cafeFroid} icon={IceCream} />
          <MenuSection title="Collations" items={collations} icon={Sandwich} />
          <MenuSection title="Desserts" items={desserts} icon={Cake} />
        </div>
      </div>
    </>
  );
}