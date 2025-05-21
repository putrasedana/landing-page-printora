import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { memo } from "react";

const stars = Array.from({ length: 5 });

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16 xl:px-20 xl:h-screen flex flex-col-reverse md:flex-row items-center gap-8">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative md:w-1/2 xl:w-2/5 mx-auto will-change-transform"
      >
        <img
          src="hero-img.jpg"
          alt="Custom T-Shirt"
          loading="lazy"
          className="rounded-lg shadow-lg mb-20 mt-6 xl:mb-20 w-full h-auto object-cover"
        />

        {/* Review Card */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: -100 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[95%] left-2 w-[95%] sm:left-1 lg:w-[80%] lg:left-3 lg:top-[90%] xl:w-[80%]"
        >
          <Card className="py-3 shadow-lg lg:p-2 xl:p-5 text-black">
            <CardContent>
              <div className="flex items-center gap-1">
                {stars.map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-500 w-5 h-5"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mt-2 italic text-sm">
                “We have no regrets! I would like to personally thank you for
                your outstanding product.” ~ Jessica
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 text-center md:text-left will-change-transform"
      >
        <h1 className="text-4xl font-serif font-bold leading-14 xl:text-5xl">
          Trendy Custom T-Shirts, Unlimited Style
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Express your unique style with premium-quality custom t-shirts,
          designed your way, with maximum results!
        </p>
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

        {/* Benefits */}
        <div className="flex items-center flex-wrap gap-4 mt-6 text-white">
          {["100% Original", "Online Ordering", "Fast Response"].map(
            (text, idx) => (
              <p key={idx} className="flex items-center gap-1">
                <CheckCircle color="#d1f33a" size={18} /> {text}
              </p>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
