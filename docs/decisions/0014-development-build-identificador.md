# ADR-0014: Expo Go per provar, development build per al mapa, i identificador `cat.talaia.app`

**Estat:** Acceptada · **Data:** 2026-10-10 · Resol la decisió pendent P22

## Context

Amb el mapa (TG-89) entra el primer mòdul natiu, `@maplibre/maplibre-react-native`, que Expo Go no porta ([ADR-0005](0005-mapa-icgc-maplibre.md)). Per veure el mapa cal un *development build*: una app pròpia amb el codi natiu, que després carrega el JavaScript de Metro com Expo Go. Però l'equip prova al mòbil amb Expo Go, i no tothom té Mac ni compte d'Apple. Per generar-ne cap cal l'identificador de l'app (`ios.bundleIdentifier` i `android.package`), que fins ara era la P22. L'equip treballa amb macOS, Windows i Linux, i no tothom té Xcode ni un compte de desenvolupador d'Apple de pagament.

## Decisió

- **Identificador:** `cat.talaia.app` a iOS i a Android. Es pot canviar fins a la primera publicació a les botigues; després ja no. *Avís:* el domini `talaia.cat` és d'una altra persona; si a la botiga hi ha conflicte, es revisa abans de publicar.
- **`expo-dev-client`** a l'app i dos perfils a `apps/mobile/eas.json`:
  - `development`: APK d'Android (qualsevol mòbil Android o emulador) i build d'iPhone (necessita el compte d'Apple de pagament; vegeu P15).
  - `development-simulator`: build per al simulador d'iOS, sense compte d'Apple.
- **Expo Go continua sent la manera de provar al mòbil** (`npm run mobile` = `expo start --go`). L'app comprova si hi ha el mòdul natiu de MapLibre (`TurboModuleRegistry.get`) i, si no hi és, la pestanya Mapa mostra un avís en lloc de carregar la llibreria. La resta de l'app hi funciona sencera.
- **El mapa es prova amb el development build** (`npm run mobile:dev`): APK d'Android des d'EAS (no cal Mac), simulador d'iOS (EAS o `npx expo run:ios` amb Xcode 26.4+), o `run:android` amb Android Studio.
- El build només s'ha de refer quan canvia una dependència nativa o `app.json`. El dia a dia continua sent `npm run mobile`.

## Conseqüències

- Tot mòdul natiu nou que no porti Expo Go ha de seguir el mateix patró (comprovar-lo i degradar) o l'app deixa de funcionar a Expo Go. La guia és a `docs/onboarding.md` → «Expo Go i el development build».
- A un iPhone físic, el mapa necessita el compte d'Apple de pagament (P15).
- Els builds d'EAS gasten la quota gratuïta del compte de l'equip: un build per persona i plataforma, i un de nou només quan canvien les dependències natives.
- Les carpetes `ios/` i `android/` es continuen generant (`expo prebuild`) i no es versionen.
