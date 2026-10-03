# ADR-0008: Monorepo amb apps/, services/, packages/shared

**Estat:** Acceptada · **Data:** 2026-09 (Incepció 2)

## Context

App, admin, API i worker comparteixen models de domini (punt d'observació, esdeveniment, índex) i convencions.

## Decisió

Un sol repositori: `apps/mobile`, `apps/admin`, `services/api`, `services/worker`, `packages/shared` (tipus, enums, la fórmula de l'índex si escau), `data/` (scripts de preprocés; dades grans fora de Git).

## Conseqüències

Un canvi de model es fa en una sola PR. L'eina de workspaces es decideix a TG-66 (veure `pendents.md`).
