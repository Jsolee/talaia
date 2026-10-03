# Sprint 1 — 05/10/2026 → 28/10/2026

**Objectiu:** deixar operativa la base tècnica (repositori, app, API, base de dades, CI i desplegament) i lliurar el primer flux complet del MVP: l'usuari inicia sessió, veu els punts d'observació de Catalunya al mapa amb l'índex de visibilitat v1, obté recomanacions per a un fenomen, consulta la fitxa d'un punt amb el desglossament de l'índex i el calendari de fenòmens astronòmics.

**Compromís:** 29 story points (6 històries) + 2 històries de suport sense punts ([TEC] i [GES]). 144 h estimades.

Fites: planning 05/10 · *no hi ha classe 12/10* · commit inicial 08/10 · design system 13/10 · retrospectiva i lliurament 28/10 · review + planning sprint 2 el 09/11.

Font de veritat: [taulell de Taiga](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/taskboard/sprint-1). Si aquest fitxer i Taiga no coincideixen, mana Taiga.

## [TEC] Setup del projecte i infraestructura · [TG-63](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/63)

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-65 | Crear el repositori GitHub (monorepo app/api/worker/admin), estratègia de branques snapshot/stable/prod amb protecció i plantilles de PR | Joan (Jsolee) | 03/10 | 06/10 | 3 |
| TG-66 | Scaffold de l'app Expo + TypeScript amb arquitectura MVVM, navegació i i18n base (ca/es/en) | Joan (Jsolee) | 04/10 | 08/10 | 5 |
| TG-69 | Crear el projecte Supabase (PostgreSQL + PostGIS, Auth, Storage), migracions i gestió de secrets | Martina | 05/10 | 09/10 | 3 |
| TG-67 | Configurar ESLint, Prettier, TypeScript strict i hooks de pre-commit (husky + lint-staged) | Joan (Jsolee) | 06/10 | 08/10 | 2 |
| TG-68 | Scaffold de l'API Node + Express + TypeScript (/api/v1, OpenAPI, healthcheck, gestió d'errors) | Joan (Jsolee) | 07/10 | 09/10 | 4 |
| TG-112 | Commit inicial: base del projecte (estructura del monorepo, configuració compartida i mòdul MVVM de referència) a snapshot i stable | Joan (Jsolee) | 08/10 | 08/10 | 2 |
| TG-70 | CI amb GitHub Actions: lint, typecheck i tests a cada PR + anàlisi de qualitat (SonarCloud) | Vinyet | 09/10 | 14/10 | 3 |
| TG-72 | Guia d'onboarding (README, CONTRIBUTING, entorn local) i kick-off tècnic amb l'equip | Joan (Jsolee) | 09/10 | 09/10 | 2 |
| TG-113 | Design system a l'app: tokens (colors, tipografia, espaiats), tema fosc i components base (botons, targetes, xips, indicador de l'índex) a partir de Figma | Joan (Jsolee) | 10/10 | 13/10 | 6 |
| TG-71 | Desplegament a la VM: Docker Compose (API + worker + Nginx), HTTPS amb Let's Encrypt i deploy des de stable | Mohamed | 13/10 | 16/10 | 5 |

## HU35 · Iniciar sessió amb Google, Apple o correu · [TG-20](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/20)
Èpica E10 · Compte i perfil d'usuari · **5 SP**  
*Com a usuari, vull iniciar sessió amb Google, Apple o correu electrònic, de manera que les meves dades quedin associades al meu compte.*

Criteris d'acceptació:
- [ ] Es pot iniciar sessió amb Google i amb correu electrònic (Apple, si hi ha compte de desenvolupador disponible).
- [ ] La sessió persisteix en tancar i obrir l'app; es pot tancar la sessió.
- [ ] En el primer accés es crea el perfil a la base de dades.
- [ ] L'API rebutja peticions sense JWT vàlid a les rutes protegides (401).

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-81 | Configurar Supabase Auth (Google, Apple i correu) i URLs de redirecció | Martina | 09/10 | 13/10 | 3 |
| TG-84 | Middleware JWT a l'API i creació del perfil en el primer accés | Martina | 13/10 | 16/10 | 3 |
| TG-82 | Pantalla de benvinguda i accés (mockup 01) | Joan (Jsolee) | 14/10 | 16/10 | 4 |
| TG-83 | Gestió de la sessió a l'app: AuthViewModel, emmagatzematge segur del token i logout | Martina | 14/10 | 19/10 | 3 |
| TG-85 | Tests del flux d'autenticació (ViewModel i middleware) | Martina | 20/10 | 23/10 | 2 |

## HU06 · Explorar els punts d'observació en un mapa · [TG-21](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/21)
Èpica E02 · Exploració de punts d'observació · **5 SP**  
*Com a usuari, vull veure els punts d'observació de Catalunya en un mapa amb relleu, de manera que descobreixi llocs on observar.*

Criteris d'acceptació:
- [ ] El mapa mostra la cartografia de l'ICGC amb relleu 3D i es pot desplaçar i fer zoom.
- [ ] Es mostren com a mínim 30 punts d'observació de Catalunya, amb color segons l'índex.
- [ ] Amb el permís de localització acceptat, es mostra la ubicació de l'usuari; si es denega, l'app continua funcionant.
- [ ] Els punts es carreguen per l'àrea visible (bbox) en menys de 2 s.

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-87 | Seed de com a mínim 30 punts d'observació de Catalunya amb metadades | Mohamed | 07/10 | 13/10 | 3 |
| TG-86 | Model de dades punts_observacio (PostGIS) i migració | Mohamed | 08/10 | 09/10 | 2 |
| TG-89 | Integrar MapLibre amb tiles vectorials de l'ICGC i relleu 3D | Vinyet | 09/10 | 14/10 | 5 |
| TG-88 | Endpoint GET /api/v1/punts amb filtre per bbox + documentació OpenAPI | Mohamed | 10/10 | 14/10 | 3 |
| TG-90 | Marcadors per índex, agrupació (clustering) i ubicació de l'usuari amb permisos | Vinyet | 15/10 | 19/10 | 4 |
| TG-91 | Tests de l'endpoint de punts | Mohamed | 15/10 | 21/10 | 1 |

## HU07 · Consultar la fitxa d'un punt d'observació · [TG-22](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/22)
Èpica E02 · Exploració de punts d'observació · **3 SP**  
*Com a usuari, vull obrir la fitxa d'un punt amb la seva informació i l'índex actual, de manera que decideixi si hi vull anar.*

Criteris d'acceptació:
- [ ] En tocar un punt s'obre la seva fitxa: nom, descripció, altitud, foscor del cel i índex actual.
- [ ] Es mostra l'evolució de l'índex de les properes hores.
- [ ] Si el punt no existeix o hi ha error de xarxa, es mostra un missatge clar.

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-92 | Endpoint GET /api/v1/punts/{id} amb l'índex actual i el de les properes hores | Mohamed | 15/10 | 19/10 | 2 |
| TG-93 | Pantalla de la fitxa del punt d'observació | Vinyet | 19/10 | 21/10 | 4 |
| TG-94 | Tests de la fitxa (ViewModel i estats d'error) | Vinyet | 21/10 | 23/10 | 1 |

## HU01 · Obtenir recomanacions segons el fenomen, la zona i el moment d'observació · [TG-23](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/23)
Èpica E01 · Recomanacions d'observació · **8 SP**  
*Com a usuari, vull indicar què vull veure, des d'on surto, quan i fins a quina distància vull desplaçar-me, de manera que rebi els punts amb millor índex de visibilitat.*

Criteris d'acceptació:
- [ ] L'usuari pot triar fenomen, origen, data/hora i distància màxima.
- [ ] El sistema retorna un rànquing de punts ordenat per índex de visibilitat (0–100) dins del radi.
- [ ] L'índex v1 combina nuvolositat (Open-Meteo), foscor del cel (mapa de contaminació lumínica de la Generalitat) i Sol/Lluna (Astronomy Engine).
- [ ] Els índexs es recalculen cada hora pel worker.

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-95 | Ingesta de la previsió d'Open-Meteo (nuvolositat per capes, humitat, visibilitat) per punt | Hugo | 09/10 | 13/10 | 4 |
| TG-96 | Càlcul astronòmic amb Astronomy Engine (Sol, Lluna, fase, alçada i crepuscles) | Hugo | 13/10 | 14/10 | 3 |
| TG-97 | Carregar el mapa de contaminació lumínica de la Generalitat (GeoTIFF) i obtenir la foscor per punt | Hugo | 14/10 | 16/10 | 3 |
| TG-101 | Pantalla «Què vols veure?» (mockup 02) | Martina | 14/10 | 21/10 | 4 |
| TG-98 | Fórmula de l'índex de visibilitat v1 (0–100) i persistència horària | Hugo | 16/10 | 19/10 | 4 |
| TG-99 | Worker horari de recàlcul de l'índex (contenidor Docker) | Martina | 19/10 | 21/10 | 2 |
| TG-100 | Endpoint GET /api/v1/recomanacions (fenomen, origen, data, radi) | Mohamed | 19/10 | 21/10 | 3 |
| TG-103 | Tests unitaris de la fórmula de l'índex i de l'endpoint de recomanacions | Vinyet | 20/10 | 23/10 | 2 |
| TG-102 | Rànquing de recomanacions sobre el mapa (mockup 03) | Vinyet | 21/10 | 23/10 | 3 |

## HU04 · Consultar els factors que expliquen l'índex de visibilitat · [TG-24](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/24)
Èpica E01 · Recomanacions d'observació · **3 SP**  
*Com a usuari, vull veure el desglossament de l'índex per hores i factors (núvols, foscor, Lluna), de manera que entengui per què un punt és millor que un altre.*

Criteris d'acceptació:
- [ ] Per a un punt i una nit, es mostra l'índex per hores.
- [ ] Es mostra la contribució de cada factor: núvols, foscor del cel i Lluna.
- [ ] Els valors mostrats coincideixen amb els que retorna l'API.

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-104 | Exposar el desglossament per hores i factors (núvols, foscor, Lluna) a l'API | Hugo | 19/10 | 21/10 | 2 |
| TG-105 | Component de desglossament de l'índex per hores i factors (mockup 05) | Joan (Jsolee) | 22/10 | 26/10 | 4 |

## HU09 · Consultar els fenòmens astronòmics per data · [TG-25](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/25)
Èpica E03 · Calendari de fenòmens astronòmics · **5 SP**  
*Com a usuari, vull veure un calendari mensual dels fenòmens astronòmics filtrable per tipus, de manera que sàpiga què passarà i quan.*

Criteris d'acceptació:
- [ ] Es mostra un calendari mensual amb els fenòmens (fases lunars, pluges d'estels, eclipsis, conjuncions).
- [ ] Es pot filtrar per tipus de fenomen i canviar de mes.
- [ ] L'endpoint GET /api/v1/esdeveniments?des_de&fins_a&tipus retorna els mateixos esdeveniments (base del servei per a Mobilicat).

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-109 | Acordar el contracte OpenAPI amb els equips de Mobilicat (consumidor) i Aprop (proveïdor de rutes) | Victor | 07/10 | 14/10 | 2 |
| TG-106 | Model de dades de fenòmens i ingesta dels calendaris IMO (pluges d'estels) i NASA (eclipsis) | Victor | 09/10 | 13/10 | 4 |
| TG-107 | Fenòmens calculats amb Astronomy Engine (fases lunars, conjuncions, superllunes) | Victor | 13/10 | 16/10 | 3 |
| TG-108 | Endpoint GET /api/v1/esdeveniments?des_de&fins_a&tipus (base del servei per a Mobilicat) | Victor | 16/10 | 19/10 | 3 |
| TG-110 | Pantalla del calendari mensual amb filtre per tipus (mockup 08) | Victor | 19/10 | 23/10 | 5 |
| TG-111 | Tests de la ingesta i de l'endpoint d'esdeveniments | Victor | 22/10 | 26/10 | 2 |

## [GES] Gestió i cerimònies del Sprint 1 · [TG-64](https://tree.taiga.io/project/mohamed-dari-pes_22_c_talaia/us/64)

| Ref | Tasca | Responsable | Inici | Límit | h |
|---|---|---|---|---|---|
| TG-73 | Sprint Planning (05/10) i lliurament de planning_1.pdf | Joan (Jsolee) | 05/10 | 05/10 | 3 |
| TG-75 | Daily scrums a classe (dilluns i dimecres) i seguiment del taulell | Joan (Jsolee) | 05/10 | 28/10 | 2 |
| TG-78 | Revisió de codi (code review) de les PR de backend | Mohamed | 09/10 | 28/10 | 2 |
| TG-79 | Actualitzar la memòria: descripció tècnica i decisions d'arquitectura | Mohamed | 23/10 | 28/10 | 2 |
| TG-77 | Actualitzar la PRT i els gràfics de burndown i velocitat | Victor | 26/10 | 28/10 | 2 |
| TG-80 | Preparar la demo del Sprint 1 per a la Review Meeting (09/11) | Vinyet | 26/10 | 28/10 | 2 |
| TG-76 | Retrospective Meeting (28/10) i lliurament de report_1.pdf | Joan (Jsolee) | 27/10 | 28/10 | 3 |

## Càrrega per persona

| Persona | Hores |
|---|---|
| Joan (Jsolee) | 40 |
| Vinyet | 24 |
| Mohamed | 23 |
| Victor | 21 |
| Martina | 20 |
| Hugo | 16 |
| **Total** | **144** |

## Dependències crítiques

- TG-112 (commit inicial, 08/10) desbloqueja tota la feina de codi de l'equip.
- TG-69 (projecte Supabase) → TG-81 (Auth) → TG-84/TG-83 (sessió).
- TG-86 (model punts) → TG-88 (endpoint punts) → TG-89/90 (mapa amb marcadors).
- TG-95/96/97 (dades) → TG-98 (fórmula de l'índex) → TG-99 (worker), TG-100 (recomanacions), TG-104 (desglossament).
- TG-113 (design system, 13/10) abans de qualsevol pantalla (TG-82, 93, 101, 102, 105, 110).
- TG-109 (contracte amb Mobilicat i Aprop) abans de TG-108 (endpoint d'esdeveniments).
