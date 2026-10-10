import type { PropsWithChildren } from 'react';
import { View, type ViewProps } from 'react-native';

// MapLibre és natiu i no té mock oficial. Jest fa servir aquest fitxer automàticament.
// ponytail: només el que fa servir l'app; afegeix-hi components quan en calguin.
export function Map({ children, ...props }: PropsWithChildren<ViewProps>) {
  return (
    <View testID="maplibre-map" {...props}>
      {children}
    </View>
  );
}

export function Camera() {
  return null;
}
