# ADR-0014: Development build per a tothom i identificador `cat.talaia.app`

**Estat:** Acceptada · **Data:** 2026-10-10 · Resol la decisió pendent P22

## Context

Amb el mapa (TG-89) entra el primer mòdul natiu, `@maplibre/maplibre-react-native`, i Expo Go ja no pot obrir l'app ([ADR-0005](0005-mapa-icgc-maplibre.md)). Cada membre de l'equip necessita un *development build*: una app pròpia amb el codi natiu, que després carrega el JavaScript de Metro com feia Expo Go. Per generar-ne cap cal l'identificador de l'app (`ios.bundleIdentifier` i `android.package`), que fins ara era la P22. L'equip treballa amb macOS, Windows i Linux, i no tothom té Xcode ni un compte de desenvolupador d'Apple de pagament.

## Decisió

- **Identificador:** `cat.talaia.app` a iOS i a Android. Es pot canviar fins a la primera publicació a les botigues; després ja no. *Avís:* el domini `talaia.cat` és d'una altra persona; si a la botiga hi ha conflicte, es revisa abans de publicar.
- **`expo-dev-client`** a l'app i dos perfils a `apps/mobile/eas.json`:
  - `development`: APK d'Android (qualsevol mòbil Android o emulador) i build d'iPhone (necessita el compte d'Apple de pagament; vegeu P15).
  - `development-simulator`: build per al simulador d'iOS, sense compte d'Apple.
- **Qui té Mac amb Xcode** pot compilar en local amb `npx expo run:ios` (o `run:android` amb Android Studio). La resta fa servir el build d'EAS del projecte `talaia.pes`.
- El build només s'ha de refer quan canvia una dependència nativa o `app.json`. El dia a dia continua sent `npm run mobile`.

## Conseqüències

- Expo Go deixa de servir per a l'app a partir de TG-89. La guia és a `docs/onboarding.md` → «Development build».
- Els builds d'EAS gasten la quota gratuïta del compte de l'equip: un build per persona i plataforma, i un de nou només quan canvien les dependències natives.
- Les carpetes `ios/` i `android/` es continuen generant (`expo prebuild`) i no es versionen.
