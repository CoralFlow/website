import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

import { BILLING_INTERVAL, type PricingPlan } from '@/types/Subscription';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'CoralFlow',
  locales: [
    {
      id: 'en',
      name: 'English',
    }
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map((locale) => locale.id);

export const PLAN_ID = {
  PERSONAL: 'personal',
} as const;

export const PricingPlanList: Array<PricingPlan> = [
  {
    id: PLAN_ID.PERSONAL,
    price: 2500,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: '',
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: 100,
      website: 100,
      storage: 100,
      transfer: 100,
    },
  },
];