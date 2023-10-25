import prodact1 from "../../../assets/products/product-01.jpg";
import prodact2 from "../../../assets/products/product-02.jpg"
import prodact3 from "../../../assets/products/product-03.jpg"
import prodact4 from "../../../assets/products/product-04.jpg"
import prodact5 from "../../../assets/products/product-05.jpg"
import prodact6 from "../../../assets/products/product-06.jpg"
import prodact7 from "../../../assets/products/product-07.jpg"
import prodact8 from "../../../assets/products/product-08.jpg"
import prodact9 from "../../../assets/products/product-09.jpg"
import prodact10 from "../../../assets/products/product-10.jpg"
import prodact11 from "../../../assets/products/product-11.jpg"
import prodact12 from "../../../assets/products/product-12.jpg"
import prodact13 from "../../../assets/products/product-13.jpg"
import prodact14 from "../../../assets/products/product-14.jpg"
import prodact15 from "../../../assets/products/product-15.jpg"
import prodact16 from "../../../assets/products/product-16.jpg"

export type HomeProductsTypes = {
  ID: number;
  ProductImage: string;
  ProductName: string;
  ProductPrice: number;
  ProductRating: number;
  Type: string;
};
const Products: HomeProductsTypes[] = [
  {
    ID: 1,
    ProductImage: `${prodact1}`,
    ProductName: "Esprit Ruffle Shirt",
    ProductPrice: 16.64,
    ProductRating: 4.5,
    Type: "Women",
  },
  {
    ID: 2,
    ProductImage: `${prodact2}`,
    ProductName: "Herschel supply",
    ProductPrice: 35.31,
    ProductRating: 6.3,
    Type: "Women",
  },
  {
    ID: 3,
    ProductImage: `${prodact3}`,
    ProductName: "Only Check Trouser",
    ProductPrice: 25.5,
    ProductRating: 5.5,
    Type: "Men",
  },
  {
    ID: 4,
    ProductImage: `${prodact4}`,
    ProductName: "Classic Trench Coat",
    ProductPrice: 75.0,
    ProductRating: 8.9,
    Type: "Women",
  },
  {
    ID: 5,
    ProductImage: `${prodact5}`,
    ProductName: "Front Pocket Jumper",
    ProductPrice: 34.75,
    ProductRating: 7.1,
    Type: "Women",
  },
  {
    ID: 6,
    ProductImage: `${prodact6}`,
    ProductName: "Vintage Inspired Classic",
    ProductPrice: 93.2,
    ProductRating: 9.5,
    Type: "Watch",
  },
  {
    ID: 7,
    ProductImage: `${prodact7}`,
    ProductName: "Shirt in Stretch Cotton",
    ProductPrice: 52.66,
    ProductRating: 6.2,
    Type: "Women",
  },
  {
    ID: 8,
    ProductImage: `${prodact8}`,
    ProductName: "Pieces Metallic Printed",
    ProductPrice: 18.96,
    ProductRating: 4.7,
    Type: "Women",
  },
  {
    ID: 9,
    ProductImage: `${prodact9}`,
    ProductName: "Converse All Star Hi Plimsolls",
    ProductPrice: 75.0,
    ProductRating: 8.3,
    Type: "Shoes",
  },
  {
    ID: 10,
    ProductImage: `${prodact10}`,
    ProductName: "Femme T-Shirt In Stripe",
    ProductPrice: 25.85,
    ProductRating: 9.9,
    Type: "Women",
  },
  {
    ID: 11,
    ProductImage: `${prodact11}`,
    ProductName: "Herschel supply",
    ProductPrice: 63.16,
    ProductRating: 9.4,
    Type: "Men",
  },
  {
    ID: 12,
    ProductImage: `${prodact12}`,
    ProductName: "Herschel supply",
    ProductPrice: 63.15,
    ProductRating: 8.1,
    Type: "Men",
  },
  {
    ID: 13,
    ProductImage: `${prodact13}`,
    ProductName: "T-Shirt with Sleeve",
    ProductPrice: 18.49,
    ProductRating: 2.7,
    Type: "Women",
  },
  {
    ID: 14,
    ProductImage: `${prodact14}`,
    ProductName: "Pretty Little Thing",
    ProductPrice: 54.79,
    ProductRating: 6.7,
    Type: "Women",
  },
  {
    ID: 15,
    ProductImage: `${prodact15}`,
    ProductName: "Mini Silver Mesh Watch",
    ProductPrice: 86.85,
    ProductRating: 9.9,
    Type: "Watch",
  },
  {
    ID: 16,
    ProductImage: `${prodact16}`,
    ProductName: "Square Neck Back",
    ProductPrice: 29.64,
    ProductRating: 5.5,
    Type: "Women",
  },
];

export default Products;