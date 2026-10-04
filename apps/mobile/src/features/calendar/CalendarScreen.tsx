import { Screen } from '@/shared/ui/Screen';

import { useCalendarViewModel } from './useCalendarViewModel';

/** Calendari de fenòmens (HU09). Contingut a TG-110. */
export function CalendarScreen() {
  const vm = useCalendarViewModel();
  return <Screen title={vm.title} subtitle={vm.subtitle} />;
}
