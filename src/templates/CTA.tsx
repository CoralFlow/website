import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={
          <a
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            href="https://forms.gle/TeXJmeFWn1SA83vy8"
          >
            {/* <GitHubLogoIcon className="mr-2 size-5" /> */}
            {t('button_text')}
          </a>
        }
      />
    </Section>
  );
};

export { CTA };
