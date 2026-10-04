# Talaia

**On i quan observar el cel a Catalunya.** Talaia recomana el millor lloc i moment per veure la posta de sol, la Lluna, una pluja d'estels o una constel·lació, amb un índex de visibilitat que creua meteorologia, contaminació lumínica, càlcul astronòmic i relleu.

Projecte de l'assignatura PES (Projecte d'Enginyeria del Software) · FIB-UPC · 2026-27 Q1 · grup 22 · equip C.

## Estructura

| Carpeta | Contingut |
|---|---|
| `apps/mobile` | App React Native + TypeScript (Expo), MVVM |
| `apps/admin` | Web d'administració (React) |
| `services/api` | API REST Node.js + Express (`/api/v1`, OpenAPI) |
| `services/worker` | Càlcul horari de l'índex de visibilitat |
| `packages/shared` | Tipus i models compartits |
| `data` | Scripts de preprocés de dades obertes |
| `docs` | Producte, arquitectura, decisions, sprint, flux de Git |

## Documentació

- [Producte i abast](docs/producte.md)
- [Arquitectura](docs/arquitectura.md) · [Decisions (ADR)](docs/decisions/README.md) · [Decisions pendents](docs/decisions/pendents.md)
- [Sprint 1](docs/sprint-1.md) · [Product backlog](docs/backlog.md)
- [Flux de Git](docs/git-workflow.md) · [Com contribuir](CONTRIBUTING.md)
- [Design system](docs/design-system.md) · [Serveis entre equips](docs/serveis-externs.md)
- [Equip](docs/equip.md)
- Context per a agents: [CLAUDE.md](CLAUDE.md)

## Posada en marxa

> Els scaffolds de l'app i de l'API arriben amb les tasques TG-66 i TG-68 (fins al 09/10). La guia completa d'entorn local es publica amb TG-72.

Requisits previstos: Node.js 22 LTS (`.nvmrc`), Git, compte d'Expo, accés al projecte Supabase de l'equip.

## Gestió

- Codi: [pes2627q1-22-gei-upc/talaia](https://github.com/pes2627q1-22-gei-upc/talaia) (organització de l'assignatura)
- Backlog i sprints: [Taiga](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia)
- Lliurables de l'assignatura: Google Drive de l'equip (`PES_22_C_TALAIA`)
