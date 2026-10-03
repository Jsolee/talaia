# Decisions pendents

Decisions que encara no estan preses. Si una tasca en depèn, **no les improvisis**: proposa una opció amb el pros i contres i pregunta. Quan es prengui, s'escriu l'ADR corresponent i s'elimina d'aquí.

Llegenda: **Recomanació** = la proposta inicial del sprint master; no és definitiva fins que hi hagi ADR.

## Tècniques (Sprint 1, scaffolds)

| # | Decisió | Opcions | Recomanació | Quan / qui |
|---|---|---|---|---|
| P1 | Gestor de paquets i workspaces | npm workspaces · pnpm (amb `node-linker=hoisted` per Expo) · Yarn | **npm workspaces**: suportat per Expo sense configuració extra, una eina menys | TG-66, Joan |
| P2 | Navegació a l'app | Expo Router (fitxers) · React Navigation | **Expo Router**: rutes tipades, deep links gratis | TG-66, Joan |
| P3 | Dades remotes i estat a l'app | TanStack Query · Redux Toolkit · Zustand | **TanStack Query** a la capa Repository + estat local als ViewModels; Zustand només si cal estat global (sessió) | TG-66, Joan |
| P4 | Validació i OpenAPI a l'API | zod + `zod-to-openapi` (spec generada) · YAML escrit a mà | **zod + zod-to-openapi**: una sola definició per validar i documentar | TG-68, Joan |
| P5 | Accés a la base de dades des de l'API/worker | supabase-js · Kysely · Drizzle · `pg` directe | **Migracions SQL amb Supabase CLI + Kysely** amb tipus generats; PostGIS amb SQL explícit | TG-69 / TG-86 |
| P6 | Validació del JWT a l'API | Verificar amb JWKS de Supabase (`jose`) · secret compartit | **JWKS amb `jose`** | TG-84, Martina |
| P7 | Framework de tests | Jest a tot arreu · Jest (mobile) + Vitest (serveis) | **Jest a tot arreu** (una sola eina) | TG-66/68 |
| P8 | Versió de Node | 22 LTS · 24 | **22 LTS** (`.nvmrc`) | TG-66 |
| P9 | Planificació del worker | `node-cron` dins el contenidor · cron del sistema | **node-cron** (tot dins de Docker) | TG-99, Martina |
| P10 | Preprocés del GeoTIFF | `geotiff.js` (Node) · GDAL (script a part) | **geotiff.js** en un script de `data/` que genera la foscor per punt | TG-97, Hugo |
| P11 | Web d'administració | Vite + React · Next.js | **Vite + React** (estàtica, servida per Nginx) | Sprint 2 |

## Producte i índex

| # | Decisió | Notes |
|---|---|---|
| P12 | Fórmula de l'índex v1: pesos de núvols / foscor / Lluna, i llindars de color | TG-98 (Hugo). Ha de ser explicable al desglossament (HU04). |
| P13 | Catàleg inicial de ≥ 30 punts d'observació: quins i amb quines metadades | TG-87 (Mohamed). Criteris: accés en cotxe, foscor, horitzó obert. |
| P14 | Valors de `tipus` de fenomen (enum compartit) | TG-106/109 (Victor), compartit amb Mobilicat. |
| P15 | Sign in with Apple | Requereix compte de desenvolupador d'Apple de pagament. Si no n'hi ha, HU35 només Google + correu. |

## Infraestructura i organització

| # | Decisió | Notes |
|---|---|---|
| P16 | On s'allotja la VM | Opcions: servidor de la FIB/UPC si n'ofereixen, crèdits d'estudiant (Azure, GitHub Student Pack), VPS barat. TG-71 (Mohamed). |
| P17 | Domini i URL pública de l'API | Necessari per a Let's Encrypt i per als equips Mobilicat/Aprop. |
| P18 | Accés al repositori | El repositori és **públic** (la protecció de branques és gratuïta i l'equip i el professor el poden veure). Cal convidar l'equip com a col·laboradors amb permís d'escriptura. **Mai cap secret al repo.** |
| P19 | Integració Taiga ↔ GitHub | Activar el webhook de Taiga perquè els commits amb `TG-<ref>` quedin enllaçats a les tasques. |
