import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        id: 1,
        title: "Maquillaje",
        description: "Maquillaje para cualquier ocasión",
        image: "assets/images/services/maquillaje.jpg",
        link: "/services/maquillaje"
    },
    {
        id: 2,
        title: "Cejas",
        description: "Cejas perfectas con depilación con hilo",
        image: "assets/images/services/cejas.jpg",
        link: "/services/cejas"
    },
    {
        id: 3,
        title: "Pestañas",
        description: "Pestañas perfectas con pelo a pelo",
        image: "assets/images/services/pestanas.jpg",
        link: "/services/pestanas"
    },

]

const AnimatedTextCharacter = ({ text }) => {
    // splitting text into letters
      const letters = Array.from(text);
    
    // Variants for Container
      const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
      };
    
    // Variants for each letter
      const child = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: -20,
          y: 10,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };
    
      return (
        <motion.div
          style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      );
    };

export default AnimatedTextCharacter;

