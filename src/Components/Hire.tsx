import { BsSendFill } from "react-icons/bs";
import { motion } from "framer-motion";

const HireMe = () => {
  return (
    <section id='hire' className="bg-gradient-to-r from-[#17d497] to-[#08f7f7] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="flex items-center gap-6">
            <BsSendFill className="text-5xl text-[#22252c] hidden md:block" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#22252c] mb-2">
                HIRE ME FOR YOUR AWESOME PROJECT
              </h2>
              <p className="text-[#22252c]/90">
                I am available for Freelance projects that depends on your project value.
              </p>
              <p className="text-[#22252c]/90">Hire me and get your project done!</p>
            </div>
          </div>

          <motion.a
            href="mailto:alexrengkat@gmail.com"
            className="px-8 py-4 bg-[#22252c] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3e4451] transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <BsSendFill className="text-xl" />
            HIRE ME
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
