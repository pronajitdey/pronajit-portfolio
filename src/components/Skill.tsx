'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  directionLeft?: boolean;
  src: string;
};

export default function Skill({ directionLeft, src }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <div className="rounded-full border border-gray-500 object-cover filter w-16 h-16 flex justify-center items-center">
        <Image
          src={src}
          alt="techIcon"
          width={10}
          height={10}
          className=" w-10 h-10 xl:w-15 xl:h-15"
        />
      </div>
    </motion.div>
  );
}
