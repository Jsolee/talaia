# ADR-0015: Relleu ombrejat fins que MapLibre Native tingui terreny 3D

**Estat:** Acceptada · **Data:** 2026-10-10 · Concreta l'[ADR-0005](0005-mapa-icgc-maplibre.md)

## Context

HU06 demana «la cartografia de l'ICGC amb relleu 3D». MapLibre GL JS (web) té terreny 3D (`terrain`), però **MapLibre Native**, el motor de `@maplibre/maplibre-react-native` a iOS i Android, encara no: la propietat `terrain` no s'hi aplica i la implementació és en un PR obert ([maplibre-native#4190](https://github.com/maplibre/maplibre-native/pull/4190), octubre del 2026). Sí que hi funcionen l'ombrejat (`hillshade`) a partir d'una font d'elevacions i la càmera inclinada.

## Decisió

- El mapa fa servir **relleu ombrejat** amb el model d'elevacions de l'ICGC (`terreny-5m-30m-rgb-extent`: 5 m a Catalunya i 30 m al voltant, codificació terrain-rgb) i una **càmera inclinada** (40°). A zoom alt, els edificis es pinten en 3D.
- Quan MapLibre Native publiqui el terreny, s'activa amb la mateixa font d'elevacions (`terrain` a l'estil, `apps/mobile/src/features/map/style/nightStyle.ts`).
- Descartat: **MapLibre GL JS dins un WebView** per tenir el 3D real ara. El mapa és la pantalla principal i hauria d'anar a 60 fps, amb els gestos i els marcadors de TG-90; un WebView hi afegeix un pont i un risc de rendiment que no compensen.
- El criteri d'HU06 s'entén com «relleu visible (ombrejat i càmera inclinada)» fins que hi hagi terreny natiu. Es comunica a l'equip i al Product Owner a la review.

## Conseqüències

- Res a canviar a l'API ni al worker: el perfil d'horitzó (TG-116) continua sortint del model de 5 m.
- Quan arribi el terreny natiu, cal una segona font `raster-dem` per al terreny (MapLibre desaconsella compartir-la amb l'ombrejat) i revisar el rendiment al dispositiu.
