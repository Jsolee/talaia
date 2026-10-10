import { TurboModuleRegistry } from 'react-native';

/** MapLibre és codi natiu: Expo Go no el porta, i importar la llibreria sense ell peta. */
export function hasNativeMap(): boolean {
  return TurboModuleRegistry.get('MLRNMapViewModule') != null;
}
