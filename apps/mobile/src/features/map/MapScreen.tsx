import { Screen } from '@/shared/ui/Screen';

import type { NightMap as NightMapView } from './NightMap';
import { useMapViewModel } from './useMapViewModel';

/** Pantalla del mapa (HU06): cartografia nocturna de l'ICGC amb relleu. Els punts arriben amb TG-90. */
export function MapScreen() {
  const vm = useMapViewModel();
  if (!vm.isMapAvailable) {
    return <Screen title={vm.unavailableTitle} subtitle={vm.unavailableMessage} />;
  }
  // A Expo Go no es pot ni importar MapLibre: el mapa només es carrega si hi ha el codi natiu.
  // eslint-disable-next-line @typescript-eslint/no-require-imports -- import condicional del mòdul natiu
  const { NightMap } = require('./NightMap') as { NightMap: typeof NightMapView };
  return <NightMap vm={vm} />;
}
