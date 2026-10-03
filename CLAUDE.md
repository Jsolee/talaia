# CLAUDE.md — Context per a Claude Code

Aquest fitxer és el punt d'entrada per a qualsevol agent (Claude Code) que treballi en aquest repositori. Llegeix-lo sencer abans de començar una tasca. Els detalls viuen a `docs/`.

## Què és Talaia

App mòbil que recomana **on i quan** observar o fotografiar el cel a **Catalunya**: postes de sol, la Lluna, pluges d'estels, eclipsis, constel·lacions. El nucli és un **índex de visibilitat (0–100)** que creua:

1. Meteorologia (núvols per capes, humitat, visibilitat) — Open-Meteo, contrastat amb Meteocat (XEMA).
2. Contaminació lumínica — mapa de la Generalitat (GeoTIFF, 1 km).
3. Càlcul astronòmic — Astronomy Engine (Sol, Lluna, fases, alçades, crepuscles).
4. Perfil d'horitzó — model d'elevacions de l'ICGC (5 m).

Projecte de l'assignatura **PES (Projecte d'Enginyeria del Software), FIB-UPC**, curs 2026-27 Q1, grup 22, equip C. Sis persones, tres sprints de desenvolupament. Tot el producte és en **català** (amb castellà i anglès com a idiomes de l'app).

Més context: `docs/producte.md` (abast, MVP, NOT list), `docs/arquitectura.md`, `docs/decisions/`.

## Estat actual

- **Sprint 1: 05/10/2026 – 28/10/2026.** Objectiu: base tècnica operativa + primer flux del MVP (login → mapa de punts amb índex v1 → recomanacions → fitxa del punt amb desglossament → calendari de fenòmens). Veure `docs/sprint-1.md`.
- El repositori acaba de néixer: només hi ha l'estructura, la documentació i les convencions. Les branques `snapshot`, `stable` i `prod` estan protegides (ruleset de GitHub). Els scaffolds (Expo, API) arriben amb les tasques TG-66 i TG-68.

## Stack (decidit, no reobrir sense ADR)

| Capa | Tecnologia |
|---|---|
| App mòbil | React Native + TypeScript amb **Expo** (EAS Build, Expo Push), arquitectura **MVVM** |
| Mapa | **MapLibre** + tessel·les vectorials i relleu 3D de l'**ICGC** (estil nocturn propi) |
| Web d'administració | React + TypeScript (estàtica, servida per Nginx) |
| API | **Node.js + TypeScript + Express**, REST a `/api/v1`, documentada amb **OpenAPI** |
| Worker | Procés Node.js que recalcula l'índex **cada hora** (índex precalculat, no a cada petició) |
| Dades | **Supabase**: PostgreSQL + **PostGIS**, Auth (Google, Apple, correu → JWT), Storage |
| Infra | VM Ubuntu amb **Docker Compose** (API + worker + Nginx), HTTPS amb Let's Encrypt |
| CI | GitHub Actions: lint + typecheck + tests a cada PR, anàlisi de qualitat (SonarCloud) |
| i18n | i18next (ca per defecte, es, en) |

Per què cada peça i què es va descartar: `docs/arquitectura.md`.

## Estructura del monorepo

```
apps/mobile        App React Native (Expo) — MVVM
apps/admin         Web d'administració (React)
services/api       API REST Express (/api/v1, OpenAPI)
services/worker    Worker horari de l'índex de visibilitat
packages/shared    Tipus i models compartits (PuntObservacio, Esdeveniment, IndexVisibilitat…)
data/              Dades estàtiques i scripts de preprocés (GeoTIFF, seeds) — els fitxers grans NO es versionen
docs/              Context, decisions (ADR), sprint, contractes d'API
```

Regla: un tipus de domini s'escriu **una sola vegada** a `packages/shared` i el consumeixen l'app, l'admin, l'API i el worker.

## Convencions

- **TypeScript strict** a tot arreu. Res de `any` sense comentari que ho justifiqui.
- **Idioma:** identificadors de codi en anglès; textos de l'app sempre via i18n (claus en anglès, valors ca/es/en); documentació, issues i PR en català.
- **MVVM a l'app:** `View` (components, sense lògica) → `ViewModel` (hook `useXxxViewModel`, estat i accions) → `Model`/`Repository` (accés a l'API). Les pantalles no criden l'API directament.
- **Design system:** tots els colors, tipografies i espaiats surten dels tokens (`docs/design-system.md`). Cap color "a mà" a les pantalles.
- **API:** REST, recursos en català tal com estan acordats amb altres equips (`/punts`, `/recomanacions`, `/esdeveniments`). Errors amb format uniforme `{ error: { code, message } }`. Tota ruta nova es documenta a l'OpenAPI a la mateixa PR.
- **Tests:** Jest. Cada ViewModel i cada servei de domini amb tests. La fórmula de l'índex és codi pur i 100 % testejable.
- **Secrets:** mai al repositori (és **públic**). `.env.example` documenta les variables; els valors reals van a `.env` (ignorat) i als secrets de GitHub.

## Flux de Git (obligatori): Gitflow + Conventional Commits 1.0.0

Detalls i receptes: `docs/git-workflow.md` (ADR-0009).

- **Gitflow** amb els noms de l'assignatura: `snapshot` = `develop` (per defecte), `stable` = `main` (una versió etiquetada per sprint, `v0.N.0`), `prod` = versió publicada.
- Branques de suport: `feature/TG-<ref>-descripcio-curta` des de `snapshot` i de tornada a `snapshot`; `release/0.N.0` des de `snapshot` cap a `stable` i `snapshot`; `hotfix/0.N.x` des de `stable` cap a `stable` i `snapshot`. No hi ha altres prefixos (res de `fix/`, `docs/`…: tot el que no és release ni hotfix és una feature).
- Tot entra per **pull request** amb CI en verd i **1 revisió aprovada**, fusionada amb merge commit. Ningú fa push directe a `snapshot`, `stable` ni `prod`.
- **Commits:** [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): `<tipus>(<àmbit>): <descripció>` amb el peu **`Refs: TG-<ref>`** obligatori (l'assignatura exigeix lligar cada commit a Taiga). Canvi incompatible: `!` i/o peu `BREAKING CHANGE:`.

  ```
  feat(api): afegeix GET /punts amb filtre per bbox

  Refs: TG-88
  ```

## Definition of Done

Especificada → implementada → provada (tests a la CI) → revisada (PR aprovada) → documentada (OpenAPI / memòria) → integrada a `snapshot`.

## Com ha de treballar Claude Code aquí

1. Identifica la tasca de Taiga (ref `TG-xx`) i llegeix-ne la descripció i els criteris d'acceptació de la història (`docs/sprint-1.md`).
2. Crea la branca `feature/TG-<ref>-…` des de `snapshot` actualitzada.
3. Respecta el stack i les convencions; si una decisió no està presa, consulta `docs/decisions/pendents.md` i **pregunta** abans d'inventar-la.
4. Escriu tests i actualitza l'OpenAPI / docs a la mateixa PR.
5. Missatges de commit i descripció de PR seguint la convenció; plantilla a `.github/pull_request_template.md`.

## Enllaços

- Taiga: https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia
- Documentació de l'assignatura i lliurables: Google Drive, carpeta `PES_22_C_TALAIA` (no al repo).
