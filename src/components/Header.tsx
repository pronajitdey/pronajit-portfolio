'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex flex-row items-start justify-between p-5 mx-auto max-w-7xl z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/pronajit-dey-2735a721b/"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/pronajitdey"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/PronajitDey"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase text-gray-400 hidden md:inline-flex text-sm">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
