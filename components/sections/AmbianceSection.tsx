"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  { src: "/ambiance/ambiance2.jpeg", alt: "L'Artisanat" },
  { src: "/ambiance/ambiance3.jpeg", alt: "La Signature" },
  { src: "/ambiance/ambiance.jpg", alt: "L'Émotion" },
  { src: "/ambiance/ambiance4.jpeg", alt: "Le Détail" },
  { src: "/ambiance/ambiance5.jpeg", alt: "L'Héritage" },
  { src: "/ambiance/ambiance6.jpeg", alt: "L'Instant" },
];

export function AmbianceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateScrollRange = () => {
      if (!trackRef.current) return;
      const isDesktop = window.innerWidth >= 768;
      // data-lenis-prevent-horizontal only blocks Lenis for events whose
      // delta is horizontal-dominant (Lenis computes this per-event), so the
      // mobile overflow-x-auto track's native swipe/drag stays uninterrupted
      // while vertical wheel/touch scroll over the same element still gets
      // smoothed by Lenis. A blanket data-lenis-prevent would block both
      // orientations, causing the same disconnected/jerky ("dans le vent")
      // scroll on entry/exit that the desktop pin had, just on this branch.
      trackRef.current.toggleAttribute("data-lenis-prevent-horizontal", !isDesktop);

      if (!isDesktop) {
        setScrollRange(0);
        return;
      }
      const range = trackRef.current.scrollWidth - document.documentElement.clientWidth;
      setScrollRange(range > 0 ? range : 0);
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  // Native CSS position: sticky drives the pin — unlike GSAP's ScrollTrigger
  // pin (which toggles position via a JS scroll-event handler), it stays in
  // lockstep with Lenis's virtual scroll with zero risk of a one-frame lag
  // at the pin's entry/exit, which is what caused the stutter.
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={sectionRef} className="relative bg-surface md:h-[300vh]">
      <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center py-24 md:py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8 md:mb-12 w-full">
          <div className="flex flex-col gap-4">
            <span className="text-label-caps text-primary tracking-[0.3em]">L&apos;Atmosphère</span>
            <h2 className="text-display-lg text-on-surface">
              Un voyage <br />
              <span className="italic text-primary">en mouvement</span>
            </h2>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 md:gap-8 pl-6 md:pl-20 w-max max-w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar"
        >
          {images.map((image) => (
            <div
              key={image.src}
              className="relative h-87.5 w-70 md:h-112.5 md:w-125 shrink-0 snap-center overflow-hidden rounded-2xl group border border-outline-variant/20 shadow-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 500px, 280px"
                className="object-cover transition-transform duration-700 will-change-transform transform-gpu group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-label-caps text-white text-xs md:text-sm tracking-widest">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
          <div className="w-2 md:w-12 shrink-0" aria-hidden="true" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-8 md:mt-12 w-full flex md:hidden">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="text-[10px] uppercase tracking-[0.5em]">Glissez pour explorer</span>
            <div className="w-12 h-px bg-on-surface-variant/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
