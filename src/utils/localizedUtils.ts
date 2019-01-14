/* eslint-disable import/prefer-default-export */
import I18n from 'react-native-i18n';
import en from '../locales/en';

I18n.fallbacks = true;

I18n.translations = {
  en,
};

// TODO: check if the types are correct
export const getLocalizedString = (...value: string[]) => I18n.t(...value);
