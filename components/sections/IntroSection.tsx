"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEnterOnce } from "@/hook/useEnterOnce";
import { useAnimateOnce } from "@/hook/useAnimateOnce";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [isInView, count, to]);

  return (
    <motion.span ref={ref} className="text-primary font-serif text-4xl">
      {rounded}
    </motion.span>
  );
}

function SlidePanel({ shouldAnimate }: { shouldAnimate: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const x = useMotionValue(0);
  const xPercent = useTransform(x, (v) => `${v}%`);

  useAnimateOnce(
    [{ value: x, to: 100, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }],
    shouldAnimate,
    isInView,
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: xPercent }}
      className="w-full h-full font-serif absolute top-0 left-0 bg-primary text-surface flex items-center justify-center text-4xl font-medium"
    >
      L&apos;Élixir Doré
    </motion.div>
  );
}

export function IntroSection() {
  const shouldAnimate = useEnterOnce("intro");

  return (
    <section id="universe" className="py-24 md:py-40 bg-surface-container-lowest scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <span className="text-label-caps text-primary tracking-[0.2em]">Notre Manifeste</span>
            <h2 className="text-display-lg text-on-surface">
              Une quête <br />
              <span className="italic">d&apos;équilibre &amp; d&apos;audace</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
              L&apos;Élixir Doré n&apos;est pas seulement un bar, c&apos;est un laboratoire
              d&apos;émotions. Nous croyons que chaque cocktail raconte une histoire, chaque
              ingrédient est une note, et chaque verre est une œuvre d&apos;art éphémère.
            </p>
            <div className="grid grid-cols-2 gap-10 mt-4">
              <div className="flex flex-col gap-2">
                <Counter to={120} suffix="+" />
                <span className="text-label-caps text-[10px] text-on-surface-variant">
                  Spiritueux Rares
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Counter to={15} />
                <span className="text-label-caps text-[10px] text-on-surface-variant">
                  Signatures Uniques
                </span>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 relative aspect-square w-full max-w-md lg:max-w-none">
            <div className="group relative h-full w-full bg-surface-container-high rounded-md overflow-hidden gold-border">
              <Image
                src="/cocktails/cocktail-2.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 448px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <SlidePanel shouldAnimate={shouldAnimate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
