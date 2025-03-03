import React, { useRef, useState, useEffect } from "react";
import "./certificate.css";
import Nav from "../nav/Nav";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
// Import images instansi
import Magang from "../../assets/instansi/inovindo.png";
import MTCNA from "../../assets/instansi/MTCNA.jpg";
import Cisco from "../../assets/instansi/cisco1.png";
import BNSP from "../../assets/instansi/BNSP.jpeg";
// import images sertifikat
import CiscoAc from "../../assets/sertifikat/cisco.png";
import MTCNAAc from "../../assets/sertifikat/MTCNA.png";
import BNSP1 from "../../assets/sertifikat/programmer.png";
import Magang1 from "../../assets/sertifikat/magang.jpg";

const Sertifikat = [
  {
    logo: Cisco,
    jsertifikat: "Cisco Networking Academy",
    sertifikat: CiscoAc,
  },
  {
    logo: MTCNA,
    jsertifikat: "MTCNA",
    sertifikat: MTCNAAc,
  },
  {
    logo: BNSP,
    jsertifikat:
      "CERTIFICATE OF COMPETENCE",
    sertifikat: BNSP1,
  },

  {
    logo: Magang,
    jsertifikat: "Implementasi Back - End dalam pembuatan website Sistem Akademik",
    sertifikat: Magang1,
  },

];

const Certificate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % Sertifikat.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + Sertifikat.length) % Sertifikat.length;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <Nav />
      <section id="sertifikat">
        <motion.h5
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Review my Certificate
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Certificate
        </motion.h2>
        <div className="container sertifikats__container">
          <motion.div
            className="sertifikats-slider"
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {Sertifikat.map(({ logo, jsertifikat, sertifikat }, index) => (
              <motion.div
                key={index}
                className="sertifikat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.5 }}
              >
                <div className="instansi__avatar">
                  <img src={logo} alt={`instansi-logo-${index}`} />
                </div>
                <h5 className="nama__instansi">{jsertifikat}</h5>
                <small className="gambar__sertifikat">
                  <img src={sertifikat} alt={`sertifikat-${index}`} />
                </small>
              </motion.div>
            ))}
          </motion.div>
          <button className="slider-arrow left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button className="slider-arrow right" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Certificate;
