import { Screen } from '@/shared/ui/Screen';

import { usePointDetailViewModel } from './usePointDetailViewModel';

/** Fitxa d'un punt d'observació (HU07, HU04). Contingut a TG-93 i TG-105. */
export function PointDetailScreen({ pointId }: { pointId: string }) {
  const vm = usePointDetailViewModel(pointId);
  return <Screen title={vm.title} subtitle={vm.subtitle} />;
}
