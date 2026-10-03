# ADR-0004: Índex de visibilitat precalculat cada hora

**Estat:** Acceptada · **Data:** 2026-09 (Incepció 2)

## Context

Calcular l'índex a cada petició implica consultar la previsió i creuar-la amb relleu per a desenes de punts: segons d'espera i crides externes proporcionals als usuaris.

## Decisió

El worker calcula cada hora l'índex de tots els punts del catàleg per a les properes nits i el desa amb el desglossament per factors. L'API només llegeix i ordena. Excepció: un punt arbitrari del mapa es calcula al moment i es guarda en memòria cau. El càlcul astronòmic es fa amb Astronomy Engine dins del servidor.

## Conseqüències

Respostes immediates, quotes externes controlades, alertes possibles sense que l'usuari obri l'app, coherència entre usuaris. La fórmula ha de ser codi pur i testejable, compartit entre worker i API.
