import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiMysql } from "react-icons/di";
import { FaAtlassian } from "react-icons/fa";
import { SiScrumalliance } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      eace: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5 }}
        className="gap-1 flex"
      >
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Frontend */}
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <AiOutlineAntDesign className="text-7xl text-red-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMui className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-400" />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Backend */}
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-blue-200" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-red-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-blue-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostman className="text-7xl text-orange-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSwagger className="text-7xl text-green-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMicrosoftazure className="text-7xl text-blue-600" />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Platforms */}
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <VscVscode className="text-7xl text-blue-600" />
          </div>
          {/* Management */}
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAtlassian className="text-7xl text-blue-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiScrumalliance className="text-7xl text-blue-600" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
