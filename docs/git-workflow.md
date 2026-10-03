# Flux de Git

## Branques permanents

| Branca | Per a què | Hi entra | Protecció |
|---|---|---|---|
| `snapshot` (per defecte) | Integració contínua del sprint en curs | PR des de branques de treball | PR obligatòria, 1 aprovació, CI en verd, sense push directe ni force-push |
| `stable` | Estat validat al final de cada sprint (el que es mostra a la review) | PR `snapshot → stable` | PR obligatòria, 1 aprovació, CI en verd |
| `prod` | Versió publicada (servidor de producció, botigues) | PR `stable → prod` | PR obligatòria, 1 aprovació, CI en verd |

Les regles són un *ruleset* de GitHub («Branques permanents»): PR obligatòria amb 1 aprovació (les aprovacions es descarten si hi ha commits nous i cal resoldre les converses), sense esborrar ni force-push. L'únic *bypass* és el rol d'administrador del repo i **només dins d'una PR** (per desencallar una PR urgent si ningú pot revisar); cap push directe. Quan existeixi la CI (TG-70), s'hi afegirà «Require status checks to pass».

El servidor es desplega des de `stable` durant el desenvolupament (TG-71) i des de `prod` per a la versió final.

## Branques de treball

Sempre des de `snapshot`, una per tasca de Taiga:

```
feature/TG-88-endpoint-punts
fix/TG-120-crash-mapa-android
chore/TG-67-eslint-prettier
docs/TG-79-memoria-arquitectura
```

Vida curta (dies, no setmanes). Abans d'obrir la PR, rebase sobre `snapshot`.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/) + referència de Taiga (obligatori a l'assignatura):

```
feat(api): endpoint GET /punts amb filtre per bbox TG-88
fix(mobile): el mapa no centra la ubicació a Android TG-90
test(worker): casos límit de la fórmula de l'índex TG-103
docs: contracte del servei d'esdeveniments TG-109
```

Tipus: `feat`, `fix`, `test`, `refactor`, `docs`, `chore`, `ci`, `style`, `perf`. Àmbits: `mobile`, `admin`, `api`, `worker`, `shared`, `data`, `infra`.

## Pull requests

- Títol com un commit. Descripció amb la plantilla (`.github/pull_request_template.md`): tasca de Taiga, què canvia, com provar-ho, captures si és UI.
- Mínim 1 revisió aprovada d'una altra persona. Qui obre la PR no l'aprova.
- Merge per **squash** a `snapshot` (un commit per tasca, historial net). Les PR entre branques permanents (`snapshot → stable → prod`) es fan amb **merge commit** per conservar la traçabilitat.
- En fusionar, moure la tasca de Taiga a «Cerrada» i anotar les **hores reals**.

## Final de sprint

1. Congelar `snapshot` (només correccions) dos dies abans de la retrospectiva.
2. PR `snapshot → stable`, revisada pel sprint master.
3. Etiqueta `sprint-N` sobre `stable`.
