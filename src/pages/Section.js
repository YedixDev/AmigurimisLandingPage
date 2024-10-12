import FondoCrochet from "../assets/img/fondo.jpg";
import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt } from "react-icons/fa";

const Section = () => {
  return (
    <>
      <div className="w-full flex justify-center relative">
        <img
          className="h-[500px] w-full object-cover m-10 rounded-3xl shadow-lg shadow-gray-800"
          src={FondoCrochet}
          alt="Fondo"
        />

        <div className="absolute top-10 left-10 right-10 bottom-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-3xl"></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white rounded-3xl">
          <motion.h2
            className="text-5xl font-bold mb-4 drop-shadow-lg font-lato"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ¡Descubre Nuestros Amigurumis!
          </motion.h2>

          <motion.p
            className="text-2xl mb-6 max-w-md text-center drop-shadow-md font-itim"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Hechos a mano con mucho amor. Perfectos para regalar o decorar
            cualquier espacio.
          </motion.p>

          <motion.a
            href="#productos"
            className="bg-[#fb9a00] px-6 py-3 rounded-full text-lg font-semibold text-white hover:bg-pink-500 transition-colors drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Ver Colección
          </motion.a>
        </div>
      </div>

      <motion.aside
        className="bg-white text-lg font-semibold flex justify-evenly items-center py-6 mx-10 rounded-xl shadow-lg shadow-gray-600 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <motion.div
          className="text-5xl text-pink-700"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaShippingFast />
        </motion.div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div className="font-lato text-2xl text-[#fb9a00] drop-shadow-sm">
            Realizamos envíos a toda Colombia.
          </div>
          <div className="font-lato text-lg text-[#fb9a00] drop-shadow-sm">
            Tu compra 100% segura
          </div>
        </div>

        <motion.div
          className="text-5xl text-pink-700"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaShieldAlt />
        </motion.div>
      </motion.aside>
    </>
  );
};

export default Section;
