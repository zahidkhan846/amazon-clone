import cg from "../assets/cg.jpg";
import lg from "../assets/lg.jpg";
import protein from "../assets/protein.jpg";
import iphone from "../assets/iphone.jpg";
import termal from "../assets/termal.jpg";
import fitbit from "../assets/fitbit.jpg";

export const products = [
  {
    id: 1,
    title: "Computer Graphics",
    desc: "copmuter graphics using c",
    price: 10.99,
    rating: 4,
    img: cg,
  },

  {
    id: 2,
    title: "Thermal Grizzly",
    desc: "Conductonaut Liquid Metal Paste - 1.0 Gram",
    price: 13.99,
    rating: 4,
    img: termal,
  },
  {
    id: 3,
    title: "LG Gram",
    desc:
      "10th Gen Intel Core i5-1035G7 15-inch IPS Full HD (1920X1080) Thin and Light Laptop (8GB/256GB SSD/Windows 10 64-bit/Dark Silver/1.13kg)",
    price: 2000,
    rating: 4,
    img: lg,
  },
  {
    id: 4,
    title: "Fitbit FB507BKBK",
    desc:
      "Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking",
    price: 100.99,
    rating: 4,
    img: fitbit,
  },
  {
    id: 5,
    title: "iPhone 12 Mini",
    desc: "New Apple iPhone 12 Mini (128GB) - Blue",
    price: 700,
    rating: 3,
    img: iphone,
  },
  {
    id: 6,
    title: "Optimum Nutrition (ON)",
    desc:
      "Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Vanilla Ice Cream), Primary Source Isolate",
    price: 5,
    rating: 4,
    img: protein,
  },
];
