'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-7 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="mt-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[500px]"
          src="/myPic2.jpg"
          alt="Pronajit's Picture"
          width={10000}
          height={10000}
        />
      </motion.div>

      <div className="-mt-10 space-y-3 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="md:text-base text-sm">
          Hi👋, I'm Pronajit Dey.
          <br />I am a <b>Fullstack</b> Web Developer and I create{' '}
          <b>responsive</b> user interfaces, paired with <b>reliable</b> and{' '}
          <b>scalable</b> backend services.
          <br />
          I worked on a variety of projects, enhancing my skills in JavaScript,
          React, NextJS, NodeJS, MongoDB, NestJS, etc. I'm passionate and like
          to explore about all the things related to technology and keep on
          enhancing my skill set.
          <br />
          In addition to all these, I also love to{' '}
          <b>Sing 🧑‍🎤, Play Guitar 🎸</b> and talking about sports I like{' '}
          <b>playing Table Tennis 🏓</b>
        </p>
      </div>
    </motion.div>
  );
}
