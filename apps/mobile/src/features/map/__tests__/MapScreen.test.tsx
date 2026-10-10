import { render, screen } from '@testing-library/react-native';

import i18n from '@/core/i18n';

import { MapScreen } from '../MapScreen';

let mockHasNativeMap = true;
jest.mock('../mapAvailability', () => ({ hasNativeMap: () => mockHasNativeMap }));

describe('MapScreen', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('ca');
  });

  it('pinta el mapa amb la seva etiqueta accessible', async () => {
    mockHasNativeMap = true;
    await render(<MapScreen />);
    expect(screen.getByTestId('maplibre-map')).toHaveProp(
      'accessibilityLabel',
      'Mapa nocturn de Catalunya amb el relleu',
    );
  });

  it('a Expo Go, sense el codi natiu, avisa en lloc de petar', async () => {
    mockHasNativeMap = false;
    await render(<MapScreen />);
    expect(screen.getByText('El mapa necessita el development build')).toBeOnTheScreen();
    expect(screen.queryByTestId('maplibre-map')).toBeNull();
  });
});
