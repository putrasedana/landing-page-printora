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
          Our Design Collection
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Discover inspiration from a variety of creative designs ready for you
          to choose and wear!
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
            View All Designs ➤
          </a>
        </Button>
      </motion.div>

      {/* Image Section */}
      <div className="md:w-full xl:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
        <DesignCard
          src="printora-img1.jpeg"
          alt="Custom T-Shirt"
          title="This World Shall Know Pain"
          description="Show strength and unspoken expression through this iconic anime-themed design."
          delay={0.6}
        />
        <DesignCard
          src="printora-img2.jpeg"
          alt="Casual T-Shirt"
          title="Lazy Duck"
          description="Cute and chill! This duck character design is perfect for those who love to look playful yet stylish."
          delay={0.9}
        />
      </div>
    </section>
  );
};

export default DesignCollection;
