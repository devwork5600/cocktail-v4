import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-10 py-32">
      <h1 className="font-serif text-4xl text-primary mb-4">Confidentialité</h1>
      <p className="text-body-md text-on-surface-variant/70 mb-12 font-light">
        Dernière mise à jour : {new Date().getFullYear()}
      </p>

      <div className="flex flex-col gap-10 text-on-surface-variant font-light">
        <section>
          <h2 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4 mb-3">
            Formulaire de demande de privatisation
          </h2>
          <p className="text-body-md leading-relaxed">
            Ce site est un projet de portfolio à but de démonstration technique. Le formulaire de
            demande de devis (section &laquo; Privatisation &raquo;) est une reconstitution visuelle
            : il n&apos;est relié à aucun serveur, aucune base de données ni aucun service
            d&apos;envoi d&apos;e-mail. Les informations que tu saisis (nom, e-mail, date,
            message...) ne sont ni transmises, ni stockées, ni consultées par qui que ce soit —
            elles restent uniquement dans ton navigateur, le temps de la page, puis disparaissent.
          </p>
        </section>

        <section>
          <h2 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4 mb-3">
            Cookies et traceurs
          </h2>
          <p className="text-body-md leading-relaxed">
            Ce site ne dépose aucun cookie et n&apos;utilise aucun outil de mesure d&apos;audience
            ou de traceur publicitaire.
          </p>
        </section>

        <section>
          <h2 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4 mb-3">
            Contact
          </h2>
          <p className="text-body-md leading-relaxed">
            Pour toute question, voir les{" "}
            <a href="/mentions-legales" className="text-primary hover:underline">
              mentions légales
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
