# Com contribuir

1. **Agafa una tasca a Taiga** que tinguis assignada i mou-la a «En curso». Mira'n la *Data d'inici*, la data límit i les hores estimades.
2. **Crea la branca** des de `snapshot`:
   ```bash
   git switch snapshot && git pull
   git switch -c feature/TG-<ref>-descripcio-curta
   ```
3. **Treballa amb commits petits** i amb la referència de Taiga:
   `feat(api): endpoint GET /punts amb filtre bbox TG-88`
4. **Abans de la PR:** `git rebase snapshot`, passa lint, typecheck i tests en local.
5. **Obre la PR cap a `snapshot`** amb la plantilla, assigna un revisor. Cap PR s'aprova a si mateixa.
6. **En fusionar** (squash): tanca la tasca a Taiga i omple **Hores reals**.

Normes completes: [docs/git-workflow.md](docs/git-workflow.md). Convencions de codi: [CLAUDE.md](CLAUDE.md#convencions).

## Definition of Done

Especificada → implementada → provada (tests a la CI) → revisada (PR aprovada) → documentada (OpenAPI / memòria) → integrada a `snapshot`.

## Si fas servir Claude Code o una altra IA

Llegeix i fes llegir [CLAUDE.md](CLAUDE.md). La IA ha de seguir el stack i les convencions, no prendre decisions de [docs/decisions/pendents.md](docs/decisions/pendents.md) pel seu compte, i tu ets responsable de revisar tot el que generi abans de la PR.
