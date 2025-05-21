import React, { memo } from "react";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const BenefitCard = memo(
  ({ title, description, imageUrl, index }: Benefit & { index: number }) => (
    <motion.div
      className="border-4 rounded-2xl shadow-md p-6 hover:shadow-lg bg-white"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="w-20 h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
);

const Benefits: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gradient-to-b from-[#d1f33a]/10 to-white xl:px-20 xl:pb-24"
    >
      <div className="mx-auto px-6 text-center max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-4 font-serif text-gray-800">
          Keunggulan Kami
        </h2>
        <p className="text-xl font-semibold text-gray-600 mb-12">
          Keuntungan bagi Anda
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
