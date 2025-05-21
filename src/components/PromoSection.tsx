import { useMemo } from "react";
import { Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const PromoSection = () => {
  const imageVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut", delay: 0.6 },
      },
    }),
    []
  );

  const contentVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
      },
    }),
    []
  );

  return (
    <section className="bg-gradient-to-b from-[#d1f33a]/10 to-white md:pb-20 md:px-8 px-4 lg:px-16 pb-20 pt-24 w-full">
      <motion.div
        className="bg-gray-900 flex flex-col md:flex-row items-center xl:w-[80%] mx-auto justify-between rounded-lg shadow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Image */}
        <motion.div className="md:w-1/2" variants={imageVariants}>
          <img
            src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/10/1c89a923-fee1-4ec6-b0cd-4f84a68aded1.jpg"
            alt="Fashion promo"
            className="w-full h-auto rounded-l-lg border-l-4 border-y-4"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="md:w-1/2 md:pl-10 mt-6 md:mt-0 p-6 text-white"
          variants={contentVariants}
        >
          <h2 className="text-4xl font-bold font-serif">
            What Are You Waiting For?
          </h2>
          <p className="mt-3 text-gray-300 text-lg">
            Order now and be a part of the boundless creative movement.
          </p>

          <div className="mt-5 space-y-3">
            <div className="flex items-center">
              <Instagram className="text-[#d1f33a] mr-3" />
              <a
                href="https://instagram.com/printora.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline"
              >
                printora.id
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#d1f33a] mr-3" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=printoraofc@gmail.com&su=Interested%20in%20Ordering%20Custom%20T-Shirts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline"
              >
                printoraofc@gmail.com
              </a>
            </div>
          </div>

          <Button
            asChild
            className="mt-6 bg-[#d1f33a] hover:bg-transparent border border-[#d1f33a] hover:text-white text-black text-lg px-10 py-6 rounded-full cursor-pointer"
          >
            <a
              href="https://wa.me/6285704128095?text=Hello,%20I%20want%20to%20order%20a%20custom%20t-shirt."
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now ➤
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromoSection;
