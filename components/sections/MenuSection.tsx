"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slugify } from "@/lib/slugify";

type MenuItem = {
  src: string;
  title: string;
};

const menuItems: MenuItem[] = [
  { src: "/cocktails/cocktail-1.png", title: "L'Or Liquide" },
  { src: "/cocktails/cocktail-2.png", title: "Élixir de Minuit" },
  { src: "/cocktails/cocktail-3.jpeg", title: "Sillage d'Orient" },
  { src: "/cocktails/cocktail-4.jpeg", title: "Le Jardin Doré" },
  { src: "/cocktails/cocktail-5.jpeg", title: "Negroni Doré" },
  { src: "/cocktails/signature-cocktail.png", title: "Old Fashioned Studio" },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-40 bg-surface scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-label-caps text-primary tracking-[0.2em]">
                Collections &amp; Créations
              </span>
              <h2 className="text-display-lg text-on-surface">
                Un voyage <br />
                <span className="italic">à travers les sens</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant font-light leading-relaxed mt-4">
                Découvrez notre sélection éphémère. Chaque cocktail est une œuvre d&apos;art, conçue
                avec des spiritueux rares et des ingrédients sourcés avec le plus grand soin.
              </p>
            </div>
            <Link
              href="/cocktails"
              className="gold-border text-on-surface font-sans text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-md hover:bg-on-surface/5 transition-all hidden md:block"
            >
              Voir la carte complète
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              >
                <Link href={`/cocktails#${slugify(item.title)}`} className="block">
                  <div className="group relative aspect-4/5 rounded-md overflow-hidden gold-border bg-surface-container">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 will-change-transform transform-gpu group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-primary font-serif italic text-2xl">{item.title}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            href="/cocktails"
            className="gold-border text-on-surface font-sans text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-md hover:bg-on-surface/5 transition-all md:hidden w-full text-center"
          >
            Voir la carte complète
          </Link>
        </div>
      </div>
    </section>
  );
}
