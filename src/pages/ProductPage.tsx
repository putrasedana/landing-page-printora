import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "NIRINA OUTER",
    price: 123000,
    description: "Outer batik modern berlengan panjang, bahan adem dan ringan.",
    imageUrl: "/images/nirina-outer.jpeg",
  },
  {
    id: "2",
    name: "LEONY DRESS",
    price: 157000,
    description:
      "Dress lengan pendek dengan motif bunga yang feminin dan anggun.",
    imageUrl: "/images/leony-dress.jpeg",
  },
  {
    id: "3",
    name: "ANISA KIMONO",
    price: 137000,
    description: "Kimono batik elegan, cocok untuk acara semi-formal.",
    imageUrl: "/images/anisa-kimono.jpeg",
  },
  {
    id: "4",
    name: "ALUNA TOP",
    price: 99000,
    description: "Blouse lengan pendek, cocok untuk harian atau kerja santai.",
    imageUrl: "/images/aluna-top.jpeg",
  },
  {
    id: "5",
    name: "SALSABILA SET",
    price: 167000,
    description: "Setelan blouse dan rok motif batik, nyaman digunakan.",
    imageUrl: "/images/salsabila-set.jpeg",
  },
  {
    id: "6",
    name: "KAIRA TUNIC",
    price: 110000,
    description: "Tunik panjang motif etnik dengan bahan katun adem.",
    imageUrl: "/images/kaira-tunic.jpeg",
  },
  {
    id: "7",
    name: "BELINDA BLOUSE",
    price: 115000,
    description: "Blouse batik casual dengan desain kekinian.",
    imageUrl: "/images/belinda-blouse.jpeg",
  },
  {
    id: "8",
    name: "CARLA BLOUSE",
    price: 105000,
    description: "Blouse elegan motif floral cocok untuk kerja.",
    imageUrl: "/images/carla-blouse.jpeg",
  },
  {
    id: "9",
    name: "DELIA DRESS",
    price: 149000,
    description: "Dress casual dengan motif batik kombinasi warna pastel.",
    imageUrl: "/images/delia-dress.jpeg",
  },
  {
    id: "10",
    name: "MAUREEN DRESS",
    price: 165000,
    description: "Long dress klasik dengan potongan slim dan elegan.",
    imageUrl: "/images/maureen-dress.jpeg",
  },
];

const ProductPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-indigo-600 font-bold mb-2">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
