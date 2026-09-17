import Link from "next/link";
import { Camera, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-surface-container-lowest pt-24 pb-12 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col items-start gap-0">
              <span className="font-serif text-3xl tracking-tight text-primary">
                L&apos;Élixir Doré
              </span>
            </Link>
            <p className="text-body-md text-on-surface-variant/70 leading-relaxed font-light">
              Un lieu hors du temps, où l&apos;élégance du passé rencontre l&apos;audace du présent.
              Une expérience réservée à ceux qui savent chercher l&apos;exceptionnel.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="#"
                aria-label="Instagram"
                className="p-3 bg-surface-container hover:bg-surface-container-high text-primary rounded-md transition-colors gold-border"
              >
                <Camera size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Messagerie"
                className="p-3 bg-surface-container hover:bg-surface-container-high text-primary rounded-md transition-colors gold-border"
              >
                <MessageCircle size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Email"
                className="p-3 bg-surface-container hover:bg-surface-container-high text-primary rounded-md transition-colors gold-border"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {["L'Univers", "La Carte", "Privatisation", "Événements", "Presse"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-body-md text-on-surface-variant hover:text-primary transition-colors font-light"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start text-on-surface-variant font-light">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="text-body-md leading-relaxed">
                  12 Rue de l&apos;Émeraude,
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex gap-4 items-center text-on-surface-variant font-light">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-body-md">+33 (0) 1 23 45 67 89</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-label-caps text-on-surface tracking-widest border-l-2 border-primary pl-4">
              Horaires
            </h3>
            <ul className="flex flex-col gap-3 text-body-md font-light text-on-surface-variant">
              <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                <span>Mardi - Jeudi</span>
                <span className="text-on-surface">18:00 - 01:00</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                <span>Vendredi - Samedi</span>
                <span className="text-on-surface">18:00 - 02:30</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                <span>Dimanche</span>
                <span className="text-on-surface">17:00 - 00:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Lundi</span>
                <span className="text-primary italic">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant/30 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-sans font-medium">
            &copy; {new Date().getFullYear()} L&apos;Élixir Doré. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-[10px] text-on-surface-variant hover:text-on-surface uppercase tracking-widest transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-[10px] text-on-surface-variant hover:text-on-surface uppercase tracking-widest transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
