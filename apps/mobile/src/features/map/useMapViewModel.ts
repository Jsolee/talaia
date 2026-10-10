import type { LngLatBounds } from '@maplibre/maplibre-react-native';
import { useTranslation } from 'react-i18next';

import { hasNativeMap } from './mapAvailability';
import { nightStyle } from './style/nightStyle';

/** Vista inicial: tot Catalunya, amb la càmera inclinada perquè es llegeixi el relleu. */
export const initialViewState = { center: [1.8, 41.75] as [number, number], zoom: 7.3, pitch: 40 };

/**
 * Límits de la càmera. Les tessel·les de l'ICGC pesen molt a zoom baix (1,4 MB a z9),
 * així que el mapa no s'allunya més enllà de Catalunya.
 */
export const cameraLimits = {
  minZoom: 6.5,
  maxZoom: 17,
  maxBounds: [-0.2, 40.3, 3.6, 43] as LngLatBounds,
};

export function useMapViewModel() {
  const { t } = useTranslation();
  return {
    isMapAvailable: hasNativeMap(),
    mapStyle: nightStyle,
    initialViewState,
    ...cameraLimits,
    accessibilityLabel: t('map.a11y'),
    unavailableTitle: t('map.unavailable.title'),
    unavailableMessage: t('map.unavailable.message'),
  };
}
