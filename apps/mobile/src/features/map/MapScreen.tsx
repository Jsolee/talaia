import { Camera, Map } from '@maplibre/maplibre-react-native';
import { StyleSheet } from 'react-native';

import { colors } from '@/core/theme/tokens';

import { useMapViewModel } from './useMapViewModel';

/** Pantalla del mapa (HU06): cartografia nocturna de l'ICGC amb relleu. Els punts arriben amb TG-90. */
export function MapScreen() {
  const vm = useMapViewModel();
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
