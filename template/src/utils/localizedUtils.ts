import i18n from 'i18n-js';
import RNLocalize from 'react-native-localize';

import en from '../locales/en';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag;
}

i18n.fallbacks = true;
i18n.translations = {
  en,
};

export const getLocalizedString = ({
  key,
  value,
  options,
}: {
  key: string;
  value: string;
  options?: {};
}) => {
  if (key && value) {
    return i18n.t(`${key}.${value}`, options);
  }
  console.warn('Missing key or value');
};
