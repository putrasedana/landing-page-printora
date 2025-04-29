import React from "react";

type Benefit = {
  title: string;
  description: string;
  imageUrl: string;
};

const benefits: Benefit[] = [
  {
    title: "Tanpa Minimum Order",
    description:
      "Pesan satu pun bisa! Cocok untuk personal, komunitas, hingga bisnis kecil.",
    imageUrl: "https://img.icons8.com/fluency/96/000000/delivery.png",
  },
  {
    title: "Produksi Cepat & Tepat Waktu",
    description:
      "Desain hari ini, cetak secepatnya. Kami utamakan ketepatan dan kecepatan.",
    imageUrl: "https://img.icons8.com/fluency/96/clock.png",
  },
  {
    title: "Bahan Kaos Premium",
    description: "Nyaman dipakai harian, tidak mudah melar, dan tahan lama.",
    imageUrl: "https://img.icons8.com/fluency/96/clothes.png",
  },
  {
    title: "Cetak Sesuai Desainmu",
    description:
      "Kamu bebas berekspresi, cukup upload desain, kami bantu wujudkan!",
    imageUrl: "https://img.icons8.com/fluency/96/upload.png",
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 xl:px-20 xl:pb-24">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 font-serif text-gray-800">
          Keunggulan Kami
        </h2>
        <p className="text-lg text-gray-600 mb-12">Keuntungan bagi Anda</p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300"
            >
              <img
                src={benefit.imageUrl}
                alt={benefit.title}
                className="w-20 h-20 mx-auto mb-6 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
