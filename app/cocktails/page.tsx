"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { slugify } from "@/lib/slugify";

type MenuItem = {
  name: string;
  ingredients: string;
  description: string;
  price: string;
  image: string;
};

const categories: { name: string; items: MenuItem[] }[] = [
  {
    name: "Signatures",
    items: [
      {
        name: "L'Or Liquide",
        ingredients:
          "Bourbon premium, Infusion de Safran, Miel d'Acacia, Bitters aromatiques, Écorce d'orange.",
        description: "Un élixir puissant et velouté aux reflets dorés.",
        price: "22€",
        image: "/cocktails/cocktail-1.png",
      },
      {
        name: "Élixir de Minuit",
        ingredients:
          "Cognac VSOP, Liqueur de Framboise Noire, Citron Jaune, Sirop de Vanille fumé au bois de chêne.",
        description: "Une expérience fumée et mystérieuse.",
        price: "20€",
        image: "/cocktails/cocktail-2.png",
      },
      {
        name: "Sillage d'Orient",
        ingredients:
          "Gin infusé au Thé Earl Grey, Sirop de Rose, Jus de Lychee, Blanc d'œuf, Pétales séchés.",
        description: "Floral, aérien et d'une élégance rare.",
        price: "19€",
        image: "/cocktails/cocktail-3.jpeg",
      },
    ],
  },
  {
    name: "Les Classiques Revisités",
    items: [
      {
        name: "Old Fashioned Studio",
        ingredients: "Rye Whiskey, Sirop d'Érable fumé, Bitters de Noix, Zeste de Pamplemousse.",
        description: "La force du whiskey équilibrée par la douceur du bois.",
        price: "18€",
        image: "/cocktails/signature-cocktail.png",
      },
      {
        name: "Negroni Doré",
        ingredients: "Gin Sec, Vermouth Rouge infusé au Cacao, Campari, Poussière d'Or comestible.",
        description: "L'amertume classique avec une touche de luxe.",
        price: "21€",
        image: "/cocktails/cocktail-4.jpeg",
      },
    ],
  },
  {
    name: "Sans Alcool (Spiritueux 0%)",
    items: [
      {
        name: "L'Innocence",
        ingredients: "Distillat de Genièvre 0%, Concombre, Menthe Fraîche, Eau Tonique premium.",
        description: "Fraîcheur absolue sans compromis.",
        price: "14€",
        image: "/cocktails/cocktail-5.jpeg",
      },
    ],
  },
];

const allItems = categories.flatMap((category) => category.items);

// Precomputed at module scope (not during render) — each entry is the global
// index of the first item in that category, for the "01, 02, 03..." numbering.
const categoryStartIndexes: number[] = [];
categories.reduce((count, category) => {
  categoryStartIndexes.push(count);
  return count + category.items.length;
}, 0);

const CURSOR_SIZE = 200;

export default function CocktailsPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!cursorRef.current) return;
    quickX.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.5, ease: "power3" });
    quickY.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.5, ease: "power3" });
  }, []);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      quickX.current?.(e.clientX);
      quickY.current?.(e.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* GSAP quickTo owns this element's transform (raw x/y cursor-follow). Framer Motion
          must not touch the same node's transform, so opacity/scale animate on the child
          instead — otherwise the two libraries fight over the same inline style. */}
      <div
        ref={cursorRef}
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          marginLeft: -CURSOR_SIZE / 2,
          marginTop: -CURSOR_SIZE / 2,
        }}
        className="hidden lg:block fixed top-0 left-0 pointer-events-none z-40"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {/* Clipping lives on a plain, never-animated node — Framer's scale/opacity above
              and GSAP's x/y on the outer node each own their own element's transform, so
              this one only ever does one job: hard-clip the filmstrip. contain:paint backs
              up overflow-hidden, since transform + overflow-hidden on the same animated
              element can desync (visible mostly in Firefox) and briefly paint unclipped. */}
          <div className="w-full h-full overflow-hidden [contain:paint] rounded-xl border border-primary/20 shadow-2xl bg-surface-container">
            <motion.div
              className="absolute inset-0"
              animate={{ y: -hoveredIndex * CURSOR_SIZE }}
              transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            >
              {allItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  style={{ width: CURSOR_SIZE, height: CURSOR_SIZE }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes={`${CURSOR_SIZE}px`}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary font-serif italic text-lg leading-tight">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <main className="grow pt-32 pb-24">
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto px-6 text-center flex flex-col gap-6"
          >
            <span className="text-label-caps text-primary tracking-[0.3em]">Édition Été 2026</span>
            <h1 className="text-display-lg text-on-surface">
              La Carte <br />
              <span className="italic text-primary">des Élixirs</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
              Une sélection méticuleuse de spiritueux rares et de créations originales, élaborées
              pour éveiller vos sens et suspendre le temps.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-6" onMouseLeave={() => setIsActive(false)}>
          <div className="flex flex-col gap-24">
            {categories.map((category, catIdx) => (
              <div
                key={category.name}
                className="flex flex-col gap-12 lg:cursor-none"
                onMouseEnter={() => {
                  setIsActive(true);
                  setHoveredIndex(categoryStartIndexes[catIdx]);
                }}
              >
                <div className="flex items-center gap-6">
                  <h2 className="text-label-caps text-primary tracking-[0.4em] whitespace-nowrap">
                    {category.name}
                  </h2>
                  <div className="h-px w-full bg-outline-variant/30" />
                </div>

                <div className="flex flex-col gap-16">
                  {category.items.map((item, itemIdx) => {
                    const globalIdx = categoryStartIndexes[catIdx] + itemIdx;
                    const displayIndex = (globalIdx + 1).toString().padStart(2, "0");

                    return (
                      <div
                        key={item.name}
                        id={slugify(item.name)}
                        className="group flex flex-col gap-4 scroll-mt-32"
                        onMouseEnter={(e) => {
                          e.stopPropagation();
                          setHoveredIndex(globalIdx);
                        }}
                      >
                        <div className="lg:hidden relative aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-outline-variant/20">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-baseline gap-4">
                            <div className="flex items-baseline gap-4">
                              <span className="text-primary font-sans text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                                {displayIndex}
                              </span>
                              <h3 className="font-serif text-3xl text-on-surface group-hover:text-primary transition-colors duration-300">
                                {item.name}
                              </h3>
                            </div>
                            <div className="flex-1 border-b border-dotted border-outline-variant/50 h-px mb-1.5" />
                            <span className="font-sans text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-body-md text-on-surface-variant font-light leading-relaxed max-w-2xl italic mb-1">
                            {item.description}
                          </p>
                          <p className="text-[12px] font-sans text-on-surface-variant/70 uppercase tracking-widest leading-relaxed">
                            {item.ingredients}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-32 border-t border-outline-variant/20 pt-24">
          <div className="max-w-2xl mx-auto px-6 text-center italic text-on-surface-variant font-light">
            <p className="text-body-md mb-8">
              &quot;L&apos;alcool ne soigne rien, mais il aide à oublier les questions restées sans
              réponse.&quot;
            </p>
            <p className="text-label-caps text-primary text-[10px] tracking-[0.2em] not-italic">
              L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
