# Design system (marca Talaia)

Font de veritat visual: els mockups de **Figma** (16 pantalles). Aquest document recull els tokens que l'app ha d'implementar a TG-113 (Joan). Tema **fosc** per defecte: és una app que s'usa de nit.

## Colors

| Token | Hex | Ús |
|---|---|---|
| `nit` | `#0E1433` | Fons principal |
| `card` | `#141B42` | Targetes |
| `sheet` | `#161D45` | Fulls inferiors (bottom sheets) |
| `crep` | `#28316B` | Superfícies elevades, estats actius |
| `linia` | `#26306A` | Separadors i vores |
| `lluna` | `#EEF0F7` | Text principal |
| `boira` | `#9AA3C7` | Text secundari |
| `far` | `#FFB547` | Accent principal (CTA, destacats) |
| `ras` | `#5FD4C4` | Índex bo / cel ras |
| `tap` | `#E0708A` | Índex dolent / cel tapat, errors |
| `jus` | `#E3C58F` | Índex regular |
| `pedra` | `#D9C4A0` | Accent càlid secundari |

Escala de l'índex de visibilitat: `tap` (0–39) → `jus` (40–69) → `ras` (70–100). *Llindars a confirmar amb la fórmula v1 (TG-98).*

## Tipografia

- **Big Shoulders Display** — titulars, xifres de l'índex, marca.
- **Atkinson Hyperlegible Next** — text de lectura, botons, etiquetes (llegibilitat de nit i accessibilitat).

## Components base (TG-113)

Botons (primari `far`, secundari, text), targetes de punt, xips de filtre (fenomen, tipus), indicador de l'índex (xifra + anell/barra amb l'escala de color), full inferior, barra de pestanyes, estats buits i d'error.

## Mapa

Estil nocturn propi sobre les tessel·les vectorials de l'ICGC, recolorit amb aquesta paleta (aigua i terreny en blaus `nit`/`crep`, etiquetes `boira`). Atribució ICGC + OpenStreetMap obligatòria.

## Regles

- Cap color, mida de font o espaiat escrit a mà a les pantalles: sempre des dels tokens del tema.
- Contrast mínim WCAG AA per al text.
- Tots els textos visibles passen per i18n.
