"use client";

import { useState } from "react";

export function ReservationSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="privatization" className="py-24 md:py-40 relative scroll-mt-32">
      <div className="absolute inset-0 bg-surface-container-lowest overflow-hidden" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col gap-8">
        <span className="text-label-caps text-primary tracking-[0.2em]">Exclusivité</span>
        <h2 className="text-display-lg text-on-surface leading-tight">
          Pour vos moments <br />
          <span className="italic text-primary">les plus précieux</span>
        </h2>
        <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
          L&apos;Élixir Doré Studio est disponible pour vos événements privés. Une privatisation
          totale ou partielle pour sublimer vos soirées, réceptions professionnelles ou célébrités
          intimes.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            className="gold-gradient text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-md hover:brightness-110 transition-all shadow-2xl"
          >
            {isOpen ? "Fermer" : "Demander un devis"}
          </button>
        </div>

        {isOpen && (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="text-left flex flex-col gap-6 pt-4 pb-2 gold-border rounded-md bg-surface-container p-8 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-label-caps text-[10px] text-on-surface-variant"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-surface-container-low border border-outline-variant rounded-md px-4 py-3 text-on-surface font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-label-caps text-[10px] text-on-surface-variant"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-surface-container-low border border-outline-variant rounded-md px-4 py-3 text-on-surface font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="date"
                  className="text-label-caps text-[10px] text-on-surface-variant"
                >
                  Date souhaitée
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  lang="fr"
                  required
                  className="bg-surface-container-low border border-outline-variant rounded-md px-4 py-3 text-on-surface font-sans text-sm focus:outline-none focus:border-primary transition-colors scheme-dark"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="guests"
                  className="text-label-caps text-[10px] text-on-surface-variant"
                >
                  Nombre de personnes
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  required
                  className="bg-surface-container-low border border-outline-variant rounded-md px-4 py-3 text-on-surface font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-label-caps text-[10px] text-on-surface-variant"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="bg-surface-container-low border border-outline-variant rounded-md px-4 py-3 text-on-surface font-sans text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="gold-gradient text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-12 py-4 rounded-md hover:brightness-110 transition-all shadow-lg self-center mt-2"
            >
              Envoyer la demande
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
