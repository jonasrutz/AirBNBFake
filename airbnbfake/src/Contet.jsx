import { useState } from "react";
import house1 from "./assets/house1.jpeg";
import house2 from "./assets/house2.jpeg";
import house3 from "./assets/house3.jpeg";
import house4 from "./assets/house4.jpeg";
import house5 from "./assets/house5.jpeg";
import house6 from "./assets/house6.jpeg";
import house7 from "./assets/house7.jpeg";
import house8 from "./assets/house8.jpeg";
import house9 from "./assets/house9.jpeg";
import house10 from "./assets/house10.jpeg";
import house11 from "./assets/house11.jpeg";
import house12 from "./assets/house12.jpeg";
import house13 from "./assets/house13.jpeg";
import house14 from "./assets/house14.jpeg";
import house15 from "./assets/house15.jpeg";
import house16 from "./assets/house16.jpeg";
import house17 from "./assets/house17.jpeg";
import house18 from "./assets/house18.jpeg";
import house19 from "./assets/house19.jpeg";
import house20 from "./assets/house20.jpeg";
import house21 from "./assets/house21.jpeg";
import house22 from "./assets/house22.jpeg"; // Fixed duplicate
import house23 from "./assets/house23.jpeg"; // Corrected this line
import house24 from "./assets/house24.jpeg";
import "./App.css";

const houses = [
  { image: house1, price: "$45.99", name: "Sunny Haven", stocked: true },
  { image: house2, price: "$120.50", name: "Whispering Pines", stocked: true },
  { image: house3, price: "$89.75", name: "Coastal Breeze Retreat", stocked: false },
  { image: house4, price: "$325.00", name: "Mountain View Lodge", stocked: true },
  { image: house5, price: "$18.25", name: "Serenity Cottage", stocked: false },
  { image: house6, price: "$240.60", name: "The Oakwood Villa", stocked: true },
  { image: house7, price: "$67.30", name: "Blue Horizon", stocked: true },
  { image: house8, price: "$15.99", name: "Rustic Ridge", stocked: true },
  { image: house9, price: "$200.45", name: "Lakeside Escape", stocked: false },
  { image: house10, price: "$8.50", name: "Golden Meadow House", stocked: true },
  { image: house11, price: "$599.99", name: "The Moonlight Chalet", stocked: false },
  { image: house12, price: "$1,275.75", name: "Palm Tree Paradise", stocked: true },
  { image: house13, price: "$300.00", name: "Seaside Paradise", stocked: false },
  { image: house14, price: "$99.99", name: "Countryside Cabin", stocked: true },
  { image: house15, price: "$450.00", name: "Luxury Estate", stocked: false },
  { image: house16, price: "$78.50", name: "Sunny Beach House", stocked: true },
  { image: house17, price: "$160.75", name: "Historic Manor", stocked: false },
  { image: house18, price: "$88.80", name: "Charming Bungalow", stocked: true },
  { image: house19, price: "$190.00", name: "Elegant Villa", stocked: false },
  { image: house20, price: "$45.30", name: "Garden Cottage", stocked: true },
  { image: house21, price: "$325.00", name: "Oceanview Retreat", stocked: false },
  { image: house22, price: "$55.99", name: "Forest Hideaway", stocked: true },
  { image: house23, price: "$110.00", name: "Riverfront Lodge", stocked: true },
  { image: house24, price: "$270.25", name: "City Loft", stocked: false },
];

function App() {
  return (
    <div className="house-container">
      {houses.map((house, index) => (
        <div className="house-card" key={index}>
          <img src={house.image} alt={house.name} className="house-image" />
          <div className="house-details">
            <h3>{house.name}</h3>
            <div className="house-price">{house.price}</div>
            <div className={`house-stock ${house.stocked ? "in-stock" : "out-of-stock"}`}>
              {house.stocked ? "In Stock" : "Out of Stock"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;