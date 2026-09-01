# L'Élixir Doré

[![CI](https://github.com/devwork5600/cocktail-v4/actions/workflows/ci.yml/badge.svg)](https://github.com/devwork5600/cocktail-v4/actions/workflows/ci.yml)

Site vitrine du bar à cocktails **L'Élixir Doré** — une page d'accueil avec présentation, carte signature, réservation, et une carte complète des cocktails.

**Démo :** [cocktail-v4.vercel.app](https://cocktail-v4.vercel.app)

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) pour le design system (tokens dans `app/globals.css`)
- [Framer Motion](https://motion.dev) pour les animations pilotées par état React (reveals, menu mobile, accordéon)
- [GSAP](https://gsap.com) + ScrollTrigger pour le pin-scroll horizontal et le suivi de curseur haute fréquence
- [Lenis](https://lenis.darkroom.engineering) pour le smooth-scroll, synchronisé avec GSAP ScrollTrigger

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Scripts

| Commande               | Description                        |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Serveur de développement           |
| `npm run build`        | Build de production                |
| `npm run start`        | Sert le build de production        |
| `npm run lint`         | ESLint                             |
| `npm run format`       | Formate le code avec Prettier      |
| `npm run format:check` | Vérifie le formatage sans modifier |

### Qualité

- Husky + lint-staged lancent ESLint et Prettier sur chaque commit.
- La CI GitHub Actions (`.github/workflows/ci.yml`) vérifie lint, format et build sur chaque PR — la branche `main` est protégée et requiert ce check.
- Déploiement automatique sur Vercel à chaque merge sur `main`.

## Structure

```
app/                # Routes (App Router) — / et /cocktails
components/          # Composants partagés (Navbar, Footer, sections, providers)
lib/                 # Utilitaires (slugify)
public/              # Images (ambiance/, cocktails/)
```
