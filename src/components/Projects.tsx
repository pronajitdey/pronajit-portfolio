'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={'https://icons8.com/icon/47394/domande'}
                alt="projectIcon"
                width={24}
                height={24}
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias voluptatem fuga necessitatibus dolore eos repellat
                similique fugiat quae veniam facere, ut numquam ab! Recusandae
                reiciendis quibusdam perferendis nisi expedita eligendi!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
