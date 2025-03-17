import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

// Variants untuk animasi gambar
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay: 1 },
  },
};

// Variants untuk animasi konten
const contentVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1 },
  },
};

const PromoSection = () => {
  return (
    <section className="bg-[#1a0e06] md:pb-20 md:px-8 px-4 lg:px-16 pb-16 pt-6 w-full">
      <motion.div
        className="bg-[#444736] flex flex-col md:flex-row items-center xl:w-[80%] mx-auto justify-between rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Gambar */}
        <motion.div className="md:w-1/2" variants={imageVariants}>
          <img
            src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/10/1c89a923-fee1-4ec6-b0cd-4f84a68aded1.jpg"
            alt="Fashion promo"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        {/* Konten */}
        <motion.div
          className="md:w-1/2 md:pl-10 mt-6 md:mt-0 p-6 text-white"
          variants={contentVariants}
        >
          <h2 className="text-4xl font-bold font-serif">Tunggu Apa Lagi?</h2>
          <p className="mt-3 text-gray-300">
            We believe that fashion should be accessible, affordable,
            contemporary, and comfortable.
          </p>

          {/* Info */}
          <div className="mt-5 space-y-3">
            <div className="flex items-center">
              <MapPin className="text-[#d1f33a] mr-3" />
              <span className="text-gray-300">DE 19701</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#d1f33a] mr-3" />
              <span className="text-gray-300">printoraofc@gmail.com</span>
            </div>
          </div>

          {/* Tombol */}
          <Button className="mt-6 bg-[#d1f33a] hover:bg-[#d1f33a] px-6 py-6 text-black text-lg">
            Pesan Sekarang ➤
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromoSection;
