
import "./about.css";
import Babout from "../../assets/saya.jpg";
import { FaAward } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { RiEmotionLine } from "react-icons/ri";
import Nav from "../nav/Nav";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Nav />
      <section id="about">
        <motion.h5
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get To Know
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        <div className="container about__container">
          <motion.div
            className="about__me"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__me-image">
              <img src={Babout} alt="photoabout_me" />
            </div>
          </motion.div>
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__cards">
              <motion.article
                className="about__card"
                whileHover={{ scale: 1.1 }}
              >
                <FaAward className="about__icon" />
                <h5>Pengalaman</h5>
                <small>-+ 1 Tahun</small>
              </motion.article>
              <motion.article
                className="about__card"
                whileHover={{ scale: 1.1 }}
              >
                <TbFileCertificate className="about__icon" />
                <h5>Sertifikat</h5>
                <small>Sertifikat Kompetensi, etc</small>
              </motion.article>
              <motion.article
                className="about__card"
                whileHover={{ scale: 1.1 }}
              >
                <CgWebsite className="about__icon" />
                <h5>Proyek Website</h5>
                <small>-+ 3 Website</small>
              </motion.article>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              Haii <RiEmotionLine /> saya Nadia Rajagukguk, seorang Front-End Developer yang penuh semangat dan berfokus 
              pada pembuatan aplikasi web yang responsif dan interaktif. Saya memiliki latar belakang di bidang Teknik Informatika 
              dan memiliki pengalaman mengembangkan proyek-proyek web menggunakan teknologi terbaru seperti HTML, CSS, JavaScript, Vue.js dan React.js.
              Saya percaya bahwa desain yang baik adalah kunci untuk menciptakan pengalaman pengguna yang luar biasa. Oleh karena itu, 
              saya berusaha selalu mengutamakan UI/UX dalam setiap proyek yang saya kerjakan, 
              memastikan bahwa aplikasi web yang saya buat tidak hanya berfungsi dengan baik, tetapi juga menyenangkan untuk digunakan.
            </motion.p>
            
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
