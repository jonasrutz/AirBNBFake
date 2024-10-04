import { useState } from "react";
import "./App.css";

const houses = [
  {
    image: "/house1.jpeg",
    price: "$45.99",
    name: "Sunny Haven",
    stocked: true,
  },
  {
    image: "/house2.jpeg",
    price: "$120.50",
    name: "Whispering Pines",
    stocked: true,
  },
  {
    image: "/house3.jpeg",
    price: "$89.75",
    name: "Coastal Breeze Retreat",
    stocked: false,
  },
  {
    image: "/house4.jpeg",
    price: "$325.00",
    name: "Mountain View Lodge",
    stocked: true,
  },
  {
    image: "/house5.jpeg",
    price: "$18.25",
    name: "Serenity Cottage",
    stocked: false,
  },
  {
    image: "/house6.jpeg",
    price: "$240.60",
    name: "The Oakwood Villa",
    stocked: true,
  },
  {
    image: "/house7.jpeg",
    price: "$67.30",
    name: "Blue Horizon",
    stocked: true,
  },
  {
    image: "/house8.jpeg",
    price: "$15.99",
    name: "Rustic Ridge",
    stocked: true,
  },
  {
    image: "/house9.jpeg",
    price: "$200.45",
    name: "Lakeside Escape",
    stocked: false,
  },
  {
    image: "/house10.jpeg",
    price: "$8.50",
    name: "Golden Meadow House",
    stocked: true,
  },
  {
    image: "/house11.jpeg",
    price: "$599.99",
    name: "The Moonlight Chalet",
    stocked: false,
  },
  {
    image: "/house12.jpeg",
    price: "$1,275.75",
    name: "Palm Tree Paradise",
    stocked: true,
  },
  {
    image: "/house13.jpeg",
    price: "$300.00",
    name: "Seaside Paradise",
    stocked: false,
  },
  {
    image: "/house14.jpeg",
    price: "$99.99",
    name: "Countryside Cabin",
    stocked: true,
  },
  {
    image: "/house15.jpeg",
    price: "$450.00",
    name: "Luxury Estate",
    stocked: false,
  },
  {
    image: "/house16.jpeg",
    price: "$78.50",
    name: "Sunny Beach House",
    stocked: true,
  },
  {
    image: "/house17.jpeg",
    price: "$160.75",
    name: "Historic Manor",
    stocked: false,
  },
  {
    image: "/house18.jpeg",
    price: "$88.80",
    name: "Charming Bungalow",
    stocked: true,
  },
  {
    image: "/house19.jpeg",
    price: "$190.00",
    name: "Elegant Villa",
    stocked: false,
  },
  {
    image: "/house20.jpeg",
    price: "$45.30",
    name: "Garden Cottage",
    stocked: true,
  },
  {
    image: "/house21.jpeg",
    price: "$325.00",
    name: "Oceanview Retreat",
    stocked: false,
  },
  {
    image: "/house22.jpeg",
    price: "$55.99",
    name: "Forest Hideaway",
    stocked: true,
  },
  {
    image: "/house23.jpeg",
    price: "$110.00",
    name: "Riverfront Lodge",
    stocked: true,
  },
  {
    image: "/house24.jpeg",
    price: "$270.25",
    name: "City Loft",
    stocked: false,
  },
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
            <div
              className={`house-stock ${
                house.stocked ? "in-stock" : "out-of-stock"
              }`}
            >
              {house.stocked ? "In Stock" : "Out of Stock"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
