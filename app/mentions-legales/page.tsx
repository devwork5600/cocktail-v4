import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-10 py-32">
      <h1 className="font-serif text-4xl text-primary mb-4">Mentions légales</h1>
      <p className="text-body-md text-on-surface-variant/70 mb-12 font-light">
        Dernière mise à jour : {new Date().getFullYear()}
      </p>

      <div className="flex flex-col gap-10 text-on-surface-variant font-light">
        <section>
          <h2 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4 mb-3">
            Projet de démonstration
          </h2>
          <p className="text-body-md leading-relaxed">
            L&apos;Élixir Doré est un projet de portfolio à but de démonstration technique.
            L&apos;établissement, son adresse et ses coordonnées présentées sur ce site sont fictifs
            et n&apos;identifient aucun commerce réel.
          </p>
        </section>

        <section>
          <h2 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4 mb-3">
            Éditeur du site
          </h2>
          <p className="text-body-md leading-relaxed">
            Ce site est édité à titre personnel et non professionnel par Adrien Delagneau. En tant
            qu&apos;éditeur non professionnel, conformément à l&apos;article 6-III-1 de la loi n°
            2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique,
            l&apos;adresse postale n&apos;est pas rendue publique.
          </p>
          <p className="text-body-md leading-relaxed mt-2">Contact : devwork5600@gmail.com</p>
        </section>

        <section>
          <h2 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4 mb-3">
            Directeur de la publication
          </h2>
          <p className="text-body-md leading-relaxed">Adrien Delagneau.</p>
        </section>

        <section>
          <h2 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4 mb-3">
            Hébergement
          </h2>
          <p className="text-body-md leading-relaxed">
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            (
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              vercel.com
            </a>
            ).
          </p>
        </section>
      </div>
    </main>
  );
}
