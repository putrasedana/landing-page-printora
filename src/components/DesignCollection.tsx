import React, { memo, useMemo } from "react";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 0.6 },
  },
};

const getImageVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut", delay },
  },
});

type DesignCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  delay: number;
};

const DesignCard = memo(
  ({ src, alt, title, description, delay }: DesignCardProps) => {
    const variants = useMemo(() => getImageVariants(delay), [delay]);

    return (
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
      >
        <div className="bg-white text-black p-2 w-full rounded-t-2xl shadow-md">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-contain md:h-[250px] rounded-md"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <hr className="my-2 border-t border-gray-300" />
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    );
  }
);

const DesignCollection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-4 md:px-8 xl:px-20 md:py-28 flex flex-col xl:flex-row xl:justify-around gap-8 xl:items-center">
      {/* Text Section */}
      <motion.div
        className="md:w-full xl:w-[35%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h2 className="text-4xl font-serif font-semibold mb-4">
          Koleksi Design Kami
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Temukan inspirasi dari beragam desain kreatif yang siap kamu pilih dan
          pakai!
        </p>
        <Button
          asChild
          className="px-6 py-6 text-lg font-semibold border border-[#d1f33a] text-[#d1f33a] bg-transparent rounded-full hover:bg-[#d1f33a] hover:text-black transition-colors duration-300 cursor-pointer"
        >
          <a
            href="https://printora.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat Semua Desain ➤
          </a>
        </Button>
      </motion.div>

      {/* Image Section */}
      <div className="md:w-full xl:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
        <DesignCard
          src="printora-img1.jpeg"
          alt="Kaos Custom"
          title="This World Shall Know Pain"
          description="Tunjukkan kekuatan dan ekspresi yang tak terucapkan lewat desain ikonik bertema anime ini."
          delay={0.6}
        />
        <DesignCard
          src="printora-img2.jpeg"
          alt="Kaos Kasual"
          title="Lazy Duck"
          description="Lucu dan santai! Desain karakter bebek ini cocok buat kamu yang suka tampil playful tapi tetap stylish."
          delay={0.9}
        />
      </div>
    </section>
  );
};

export default DesignCollection;
