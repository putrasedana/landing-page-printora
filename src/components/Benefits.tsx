import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Gratis Pengiriman",
    description: "You will definitely get this benefit.",
  },
  {
    title: "Dukungan 24/7",
    description: "Nunc venenatis velit ut rutrum venenatis.",
  },
  {
    title: "Pemesanan Online",
    description: "You will definitely get this benefit.",
  },
  {
    title: "Retur Tanpa Biaya",
    description: "You will definitely get this benefit.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row md:px-8 justify-around lg:px-16 md:py-28 xl:px-20 items-center gap-8 py-16 px-4 bg-gray-50"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2, delay: 2 }}
        className="w-full md:w-1/2"
      >
        <h3 className="text-yellow-500 text-xl font-semibold lg:text-2xl">
          Keunggulan Kami
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2 font-serif">
          Keuntungan bagi Anda
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Check className="text-yellow-500" size={24} />
              <div>
                <h4 className="text-lg lg:text-2xl font-semibold text-gray-800">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 lg:text-lg text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full md:w-1/2 xl:w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
      >
        <img
          src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/4/3274cbe2-92ea-4346-ad5c-6c70a14d60a0.png"
          alt="Keuntungan"
          className="rounded-lg shadow-lg w-full"
        />
      </motion.div>
    </section>
  );
}
