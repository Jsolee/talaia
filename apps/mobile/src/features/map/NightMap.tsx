import { Camera, Map } from '@maplibre/maplibre-react-native';
import { StyleSheet } from 'react-native';

import { colors } from '@/core/theme/tokens';

import type { useMapViewModel } from './useMapViewModel';

type NightMapProps = { vm: ReturnType<typeof useMapViewModel> };

/** El mapa natiu. Només el carrega `MapScreen` quan hi ha el codi natiu de MapLibre. */
export function NightMap({ vm }: NightMapProps) {
  return (
    <Map
      style={styles.map}
      mapStyle={vm.mapStyle}
      accessibilityLabel={vm.accessibilityLabel}
      attribution
      logo={false}
      tintColor={colors.boira}
    >
      <Camera
        initialViewState={vm.initialViewState}
        minZoom={vm.minZoom}
        maxZoom={vm.maxZoom}
        maxBounds={vm.maxBounds}
      />
    </Map>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1, backgroundColor: colors.nit },
});
