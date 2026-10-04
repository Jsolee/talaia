import { Screen } from '@/shared/ui/Screen';

import { useWelcomeViewModel } from './useWelcomeViewModel';

/** Benvinguda i accés (HU35, mockup 01). Contingut a TG-82; sessió a TG-83. */
export function WelcomeScreen() {
  const vm = useWelcomeViewModel();
  return <Screen title={vm.title} subtitle={vm.subtitle} />;
}
