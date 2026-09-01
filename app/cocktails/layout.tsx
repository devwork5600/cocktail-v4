import type { Metadata } from "next";

const title = "La Carte des Élixirs";
const description =
  "Découvrez la carte de L'Élixir Doré : cocktails signatures, classiques revisités et créations sans alcool, élaborés avec des spiritueux rares.";

// page.tsx is a Client Component and cannot export metadata, so the segment layout carries it.
export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/cocktails",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/cocktails",
    siteName: "L'Élixir Doré",
    title: `${title} — L'Élixir Doré`,
    description,
    images: [
      {
        url: "/cocktails/signature-cocktail.png",
        alt: "Cocktails signatures de L'Élixir Doré",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — L'Élixir Doré`,
    description,
    images: ["/cocktails/signature-cocktail.png"],
  },
};

export default function CocktailsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
