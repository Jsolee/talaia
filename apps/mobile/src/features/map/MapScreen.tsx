import { Screen } from '@/shared/ui/Screen';

import { useMapViewModel } from './useMapViewModel';

/** Pantalla del mapa (HU06, HU01). El mapa MapLibre + ICGC arriba amb TG-89. */
export function MapScreen() {
  const vm = useMapViewModel();
  return <Screen title={vm.title} subtitle={vm.subtitle} />;
}
