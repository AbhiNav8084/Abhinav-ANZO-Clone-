import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Page5 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  
  const textY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="/src/assets/human.mp4"
        ></video>
      </div>


      <div className="h-screen flex items-center justify-center relative">
      
        <div className="absolute w-[93%] h-[93%] bg-transparent bg-black rounded-[26px] border-[15px] border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>

       
        <motion.h1 style={{ y: textY, opacity }} className="text-white text-[18vw] font-[anzo6] top-[35%] absolute uppercase">
          The
        </motion.h1>
        <motion.h1 style={{ y: textY, opacity }} className="text-white text-[18vw] font-[anzo6] top-[65%] absolute uppercase">
          Focus
        </motion.h1>
      </div>
    </div>
  );
};

export default Page5;
