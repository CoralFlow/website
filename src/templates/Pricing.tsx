import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { PricingInformation } from '@/features/billing/PricingInformation';
import { Section } from '@/features/landing/Section';
import { PLAN_ID } from '@/utils/AppConfig';

const Pricing = () => {
  const t = useTranslations('Pricing');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
    >
      <PricingInformation
        buttonList={{
          [PLAN_ID.PERSONAL]: (
            <Button
              // variant={buttonVariants.default}
              className="mt-5 w-full"
              // onClick={() => window.location.href = '/sign-up'}
            >
              {t('button_text')}
            </Button>
          ),
        }}
      />
    </Section>
  );
};

export { Pricing };