import {configureLocalization} from '@lit/localize';
import {sourceLocale, targetLocales} from '../data/locale-codes';

export const {getLocale, setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`../data/locale/generated/${locale}`),
});

// TODO: this is a temporary fix until we have the config files set up
export const isLocalizationEnabled = true;