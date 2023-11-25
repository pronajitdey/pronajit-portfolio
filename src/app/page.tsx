'use client';

import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center animate-pulse">
            <Image
              src="/myPic.jpg"
              alt="go to homepage"
              width={10000}
              height={10000}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
