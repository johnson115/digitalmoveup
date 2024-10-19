import React from 'react';
import { Coffee, Sandwich, IceCream, Cake } from 'lucide-react';
import "./menu.css";

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

const collations = [
  { name: "Sandwich", price: "1.99", image: "https://images.unsplash.com/reserve/jCCsCae7RwCDOKTCA2Ji_reggeli%20-%20sonk%C3%A1s%20szendvics.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbmR3aWNoJTIwYmFndWV0dGV8ZW58MHx8MHx8fDA%3D" },
  { name: "Crepe", price: "2.99", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Libanais sandwich", price: "1.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_DyC8n2_kgTiUdzO5LSXTgpg2M_W9YQWXg&s" },
  { name: "Burger ", price: "3.99", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Pizza fruit de mer", price: "1.99", image: "https://images.unsplash.com/photo-1652952561151-97e82f26c336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBmcnVpdCUyMGRlJTIwbWVyfGVufDB8fDB8fHww" },
  { name: "Pizza margherita", price: "3.99", image: "https://images.unsplash.com/photo-1664309641932-0e03e0771b97?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Pizza Neptune", price: "4.99", image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwbmVwdHVuZXxlbnwwfHwwfHx8MA%3D%3D" },
];

const cafeFroid = [
  { name: "Milk-shake ", price: "1.99", image: "data:image/jpeg;base64,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" },
  { name: "Café Glacé", price: "2.99", image: "https://img.freepik.com/photos-gratuite/frappuccino-aromatique-table_23-2148900666.jpg?ga=GA1.1.905730027.1725538837&semt=ais_hybrid" },
  { name: "Coupe De Glace", price: "4.99", image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdXBlJTIwZGUlMjBnbGFjZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Thé Glacé", price: "1.99", image: "https://img.freepik.com/photos-gratuite/the-glace-fait-maison-herbes-du-citron-dessus_140725-3424.jpg?ga=GA1.1.905730027.1725538837&semt=ais_hybrid" },
  { name: "Jus de  Fraise", price: "3.99", image: "https://t4.ftcdn.net/jpg/09/03/08/19/240_F_903081974_hs5jYjRSDbl3v6gprPZdFt4Zn57IbZm8.jpg" },
  { name: "Jus de Orange", price: "1.99", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8anVzJTIwZGUlMjBvcmFuZ2V8ZW58MHx8MHx8fDA%3D" },
  { name: "Jus de Banane", price: "3.99", image: "https://images.unsplash.com/photo-1685967836529-b0e8d6938227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anVzJTIwZGUlMjBCYW5hbmV8ZW58MHx8MHx8fDA%3D" },
  { name: "Jwejem", price: "4.99", image: "https://th.bing.com/th/id/OIP.5B3tiCKeFH7KBEYvWFxO7wHaNL?w=750&h=1334&rs=1&pid=ImgDetMain" }
];

const desserts = [
  { name: "Gâteau au Fromage", price: "1.99", image: "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhdGVhdSUyMGF1JTIwZnJvbWFnZXxlbnwwfHwwfHx8MA%3D%3D" },
 
  { name: "Brownie", price: "4.99", image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Fudge au Chocolat", price: "1.99", image: "https://images.unsplash.com/photo-1583528225108-295481722b35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnVkZ2UlMjBhdSUyMENob2NvbGF0fGVufDB8fDB8fHww" },

  { name: "Gâteau au Fromage aux Baies", price: "1.99", image: "https://images.unsplash.com/photo-1668441294583-bebe5e21bb63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEclQzMlQTJ0ZWF1JTIwYXUlMjBGcm9tYWdlJTIwYXV4JTIwQmFpZXN8ZW58MHx8MHx8fDA%3D" },
  { name: "Gâteau au chocolat", price: "3.99", image: "https://images.unsplash.com/photo-1682596044375-eb3c629fd9e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdhdGVhdSUyMGF1JTIwY2hvY29sYXR8ZW58MHx8MHx8fDA%3D" },
  { name: "Crepe au chocolat", price: "4.99", image: "https://images.unsplash.com/photo-1515467837915-15c4777ba46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JlcGUlMjBhdSUyMGNob2NvbGF0fGVufDB8fDB8fHww" }
];

const MenuItem = ({ name, price, image }) => (
  <div className="flex items-center mb-4 bg-secondary rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
    <div className="relative w-24 h-24">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <span className="absolute bottom-1 right-1 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
        {price} TND
      </span>
    </div>
    <div className="ml-4 flex-grow">
      <h3 className="text-lg font-semibold text-primary">{name}</h3>
    </div>
  </div>
);

const MenuSection = ({ title, items, icon: Icon }) => (
  <div className="w-full md:w-1/2 px-4 mb-8 ">
    <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2 flex items-center">
      <Icon className="mr-2" size={24} />
      {title}
    </h2>
    <div className="grid gap-4">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

export default function CoffeeMenu() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-center text-3xl font-bold mb-2 text-primary">MENU & PRICING</h1>
      <h2 className="text-center text-4xl font-bold mb-8 text-primary-foreground">Competitive Pricing</h2>
      <div className="flex flex-wrap -mx-4">
        <MenuSection title="Café Chaud" items={cafeChaud} icon={Coffee} />
        <MenuSection title="Collations" items={collations} icon={Sandwich} />
        <MenuSection title="Café Froid" items={cafeFroid} icon={IceCream} />
        <MenuSection title="Desserts" items={desserts} icon={Cake} />
      </div>
    </div>
  );
}