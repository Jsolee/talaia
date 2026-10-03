---
description: Comença una tasca de Taiga seguint el flux de l'equip (ús: /tasca TG-88)
---

Vull començar la tasca de Taiga $ARGUMENTS.

1. Llegeix `CLAUDE.md` i, a `docs/sprint-1.md`, la fila de $ARGUMENTS i els criteris d'acceptació de la seva història.
2. Comprova a `docs/decisions/pendents.md` si la tasca depèn d'alguna decisió oberta. Si és així, para i pregunta'm abans d'escriure codi.
3. Crea la branca des de `snapshot` actualitzada amb el nom `feature/$ARGUMENTS-<descripcio-curta>` (o `fix/`, `chore/`, `docs/` segons el tipus).
4. Proposa'm un pla breu (fitxers a crear o tocar, tests) i espera el meu ok.
5. Implementa amb tests, respecta MVVM, i18n i els tokens del design system, i actualitza l'OpenAPI o la documentació si toca.
6. Fes commits amb Conventional Commits acabats en `$ARGUMENTS` i prepara la descripció de la PR amb `.github/pull_request_template.md`.
