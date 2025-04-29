import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[#464838] text-white py-12 px-4 md:px-8 md:flex-row lg:px-16 xl:px-20 xl:h-screen flex flex-col items-center gap-8">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative md:w-1/2 xl:w-3/7 mx-auto"
      >
        <img
          src="hero-img.jpg"
          alt="Kaos Custom"
          className="rounded-lg shadow-lg mb-20 mt-6 xl:mb-20"
        />
        {/* Review Card */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: -150 }}
          transition={{ duration: 2, delay: 0.3, ease: "linear" }}
        >
          <Card className="absolute top-[70%] left-2 text-black py-3 shadow-lg w-[95%] sm:left-1 lg:w-[80%] lg:left-3 lg:p-2 lg:top-[100%] xl:w-[70%] xl:p-5">
            <CardContent>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
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
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl font-serif font-bold xl:text-5xl">
          Kaos Custom Kekinian, Gaya Tanpa Batas
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Ekspresikan gaya unikmu dengan kaos custom berkualitas premium, desain
          suka-suka, hasil maksimal!
        </p>
        <Button className="mt-6 bg-[#d1f33a] cursor-pointer hover:bg-transparent border hover:text-white hover:border-[#d1f33a] border-[#d1f33a] px-6 py-6 text-black text-lg">
          Pesan Sekarang ➤
        </Button>
        {/* Benefits */}
        <div className="flex items-center flex-wrap gap-4 mt-6 text-white">
          <p className="flex items-center gap-1">
            <CheckCircle color="#d1f33a" size={18} /> 100% Original
          </p>
          <p className="flex items-center gap-1">
            <CheckCircle color="#d1f33a" size={18} /> Pemesanan Online
          </p>
          <p className="flex items-center gap-1">
            <CheckCircle color="#d1f33a" size={18} /> Respon Cepat
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
