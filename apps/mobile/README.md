# @talaia/mobile

App mòbil de Talaia: React Native + TypeScript amb **Expo SDK 57** i **Expo Router**, arquitectura **MVVM**.

## Arrencar

```bash
nvm use                      # Node 22 (des de l'arrel)
npm install                  # des de l'arrel: instal·la tots els workspaces
npm run mobile               # = expo start, des de l'arrel
```

Mentre no hi hagi mòduls natius (MapLibre arriba amb TG-89), es pot provar amb **Expo Go**. Després caldrà un *development build* (`npx expo run:ios|android` o EAS): vegeu `AGENTS.md`.

| Ordre | Què fa |
|---|---|
| `npm run typecheck -w apps/mobile` | TypeScript strict |
| `npm test -w apps/mobile` | Jest (`jest-expo`) |
| `npm run lint -w apps/mobile` | ESLint amb la configuració de l'arrel (`eslint.config.mjs`) |

> Per afegir dependències amb codi natiu: `npx expo install <paquet>` dins d'`apps/mobile` (tria la versió compatible amb l'SDK).

## Estructura

```
src/
  app/                  Rutes d'Expo Router. Fitxers prims: només importen la pantalla de la feature.
    _layout.tsx         Proveïdors globals + Stack arrel
    (tabs)/             Pestanyes natives: Mapa (index), Calendari, Perfil
    punt/[id].tsx       Fitxa d'un punt d'observació
    benvinguda.tsx      Benvinguda i accés (modal)
  features/<feature>/   Una carpeta per funcionalitat, amb les tres capes MVVM
    XxxScreen.tsx       View: només pinta i crida accions del ViewModel
    useXxxViewModel.ts  ViewModel: estat, textos traduïts, accions
    xxxRepository.ts    Model/Repository: dades remotes (TanStack Query + core/api)
    __tests__/
  core/
    api/                httpClient (únic accés HTTP, errors { error: { code, message } }) i queryClient
    config/env.ts       Variables EXPO_PUBLIC_*
    i18n/               i18next: ca (per defecte), es, en; claus tipades
    providers/          AppProviders (SafeArea, React Query, i18n)
    theme/tokens.ts     Tokens del design system (colors, espaiats, radis, mides)
  shared/ui/            Components de presentació reutilitzables
```

## Regles

- **MVVM:** cap pantalla ni ViewModel crida `fetch`; només els Repository, a través de `core/api`.
- **i18n:** cap text a les pantalles; tot via `t('…')`. Una clau nova va als tres fitxers de `core/i18n/locales/` (hi ha un test que ho comprova).
- **Tokens:** cap color, mida ni espaiat a mà; tot de `core/theme/tokens.ts`.
- Rutes en català (`/punt/[id]`, `/calendari`) i identificadors de codi en anglès.
