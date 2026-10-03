# ADR-0006: Una VM amb Docker Compose + Nginx + Let's Encrypt

**Estat:** Acceptada · **Data:** 2026-09 (Incepció 2)

## Context

Cal allotjar l'API, el worker i la web d'administració amb HTTPS, de manera reproduïble i barata, i documentar la configuració (ports, certificats, versions).

## Decisió

Una VM Ubuntu amb Docker Compose (api, worker, nginx). Nginx és l'únic punt d'entrada, amb certificats Let's Encrypt. Desplegament des de `stable` (i `prod` per a la versió final). Descartats: Kubernetes/microserveis (complexitat sense necessitat), PaaS gratuïts (aturen serveis inactius i trencarien el càlcul horari).

## Conseqüències

Punt únic de fallada acceptat a aquesta escala; mitigat amb desplegament reproduïble. El worker es pot moure a una altra màquina sense canviar el disseny.
