"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/ambiance/hero-bg.jpg"
          alt="L'Élixir Doré Studio Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-label-caps text-primary tracking-[0.4em]">
            Une Expérience Sensorielle Unique
          </span>
          <h1 className="text-display-lg md:text-[5rem] text-on-surface leading-[1.05]">
            L&apos;Art de la <br />
            <span className="italic">Mixologie Moderne</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Niché au cœur de la ville, L&apos;Élixir Doré est un sanctuaire dédié à
            l&apos;excellence. Une invitation à redécouvrir les classiques à travers le prisme de
            l&apos;innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <Link
              href="/cocktails"
              className="gold-gradient text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-10 py-5 rounded-md hover:brightness-110 transition-all shadow-2xl"
            >
              Explorer la carte
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-label-caps text-[10px] text-on-surface-variant opacity-50">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
