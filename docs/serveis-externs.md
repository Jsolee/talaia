# Serveis entre equips

L'assignatura demana identificar quins equips consumeixen els nostres serveis i quins serveis consumim nosaltres. El contracte definitiu s'acorda a la tasca **TG-109** (Victor, fins al 14/10) i es documenta a l'OpenAPI de `services/api`.

## Oferim: servei d'esdeveniments astronòmics → equip Aprop

Història: **HU43** (E12). L'endpoint es construeix al Sprint 1 com a base del calendari (TG-108).

```
GET /api/v1/esdeveniments?des_de=2026-10-01&fins_a=2026-10-31&tipus=pluja_estels
Header: X-API-Key: <clau assignada a Aprop>
```

Proposta de resposta (a validar amb Aprop):

```json
{
  "data": [
    {
      "id": "e8f3…",
      "tipus": "pluja_estels",
      "nom": "Oriònides",
      "inici": "2026-10-21T20:00:00Z",
      "fi": "2026-10-22T05:00:00Z",
      "maxim": "2026-10-22T02:00:00Z",
      "estat": "previst",
      "descripcio": "…",
      "font": "IMO"
    }
  ]
}
```

Decisions obertes: valors exactes de `tipus` (enum compartit a `packages/shared`), idioma dels textos (paràmetre `lang`?), paginació, límit de peticions per clau.

## Consumim: servei de rutes → equip Mobilicat

Ús: mostrar **distància i temps** des de l'origen de l'usuari fins a un punt (HU08, fitxa del punt, rànquing de recomanacions). La navegació no la fem nosaltres: l'app obre l'app de mapes del mòbil amb un **deep link** a les coordenades.

Pendent de Mobilicat: URL base, autenticació, format de la petició (origen, destí, mode de transport) i de la resposta, límits. Mentre no estigui disponible, l'API de Talaia ha d'encapsular la crida darrere d'una interfície (`RouteProvider`) amb una implementació simulada (distància en línia recta i velocitat mitjana) perquè l'app no en depengui.
