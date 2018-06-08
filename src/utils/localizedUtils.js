/* eslint-disable import/prefer-default-export */
import I18n from 'react-native-i18n';
import en from '../locales/en';

I18n.fallbacks = true;

I18n.translations = {
  en,
};

export const getLocalizedString = (...value) => I18n.t(...value);
