'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        Skills
      </h3>

      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs">
        Hover over a skill for current proficiency
      </h3> */}

      <div className="grid grid-cols-4 gap-3 md:gap-3 lg:gap-5">
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
          directionLeft={true}
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          directionLeft={true}
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          directionLeft={true}
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          directionLeft={true}
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
          directionLeft={true}
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
          directionLeft={true}
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          directionLeft={true}
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          directionLeft={true}
        />
      </div>
    </motion.div>
  );
}
