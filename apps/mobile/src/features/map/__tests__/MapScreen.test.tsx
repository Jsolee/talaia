import { render, screen } from '@testing-library/react-native';

import i18n from '@/core/i18n';

import { MapScreen } from '../MapScreen';

describe('MapScreen', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('ca');
  });

  it('pinta el mapa amb la seva etiqueta accessible', async () => {
    await render(<MapScreen />);
    expect(screen.getByTestId('maplibre-map')).toHaveProp(
      'accessibilityLabel',
      'Mapa nocturn de Catalunya amb el relleu',
    );
  });
});
