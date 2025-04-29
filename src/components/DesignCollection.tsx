import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 1 },
  },
};

const imageVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeInOut", delay },
  },
});

const DesignCollection: React.FC = () => {
  return (
    <section className="bg-[#1a0e06] text-white py-16 px-4 lg:px-16 md:py-28 md:px-8 flex flex-col items-center gap-4 md:flex-col xl:justify-around xl:px-20 xl:flex-row">
      {/* Text Section */}
      <motion.div
        className="md:w-[100%] xl:w-[35%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h2 className="text-4xl font-serif font-semibold mb-4 md:mt-4">
          Koleksi Design Kami
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Temukan inspirasi dari beragam desain kreatif yang siap kamu pilih dan
          pakai!
        </p>
        <Button className="border p-6 font-semibold text-lg border-[#d1f33a] cursor-pointer text-[#d1f33a] hover:bg-[#d1f33a] hover:text-black transition">
          Lihat Semua Design ➤
        </Button>
      </motion.div>

      {/* Image Section */}
      <div className="md:w-[100%] xl:w-[55%] grid grid-cols-1 mt-4 md:grid-cols-2 gap-6">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants(0.8)}
        >
          <div className="bg-white text-black p-2 w-full rounded-t-2xl">
            <img
              src="printora-img1.jpeg"
              alt="Kaos Custom"
              className="w-full h-full object-contain md:h-[250px]"
            />
            <div className="p-2">
              <h3 className="text-xl font-semibold">
                This World Shall Know Pain
              </h3>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm">
                Tunjukkan kekuatan dan ekspresi yang tak terucapkan lewat desain
                ikonik bertema anime ini.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants(1)}
        >
          <div className="bg-white text-black p-2 w-full rounded-t-2xl">
            <img
              src="printora-img2.jpeg"
              alt="Kaos Kasual"
              className="w-full h-full object-contain md:h-[250px]"
            />
            <div className="p-2">
              <h3 className="text-xl font-semibold">Lazy Duck</h3>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm">
                Lucu dan santai! Desain karakter bebek ini cocok buat kamu yang
                suka tampil playful tapi tetap stylish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignCollection;
