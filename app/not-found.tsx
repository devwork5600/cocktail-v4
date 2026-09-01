import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <main className="grow flex items-center justify-center px-6 py-32">
        <div className="max-w-xl text-center flex flex-col items-center gap-6">
          <span className="text-label-caps text-primary tracking-[0.3em]">Erreur 404</span>
          <h1 className="text-display-lg text-on-surface">
            Cette page <br />
            <span className="italic text-primary">s&apos;est évaporée</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
            Comme un cocktail bu trop vite, la page que vous cherchez n&apos;existe plus — ou
            n&apos;a jamais existé.
          </p>
          <Link
            href="/"
            className="gold-gradient text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-10 py-5 rounded-md hover:brightness-110 transition-all shadow-2xl mt-4"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    </div>
  );
}
