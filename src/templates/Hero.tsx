import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36">
      <CenteredHero
        banner={{
          href: 'https://www.linkedin.com/company/coralflow/',
          text: (
            <>
              <LinkedInLogoIcon className="mr-1 size-5" /> {t('follow_twitter')}
            </>
          ),
        }}
        title={t.rich('title', {
          important: (chunks) => (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        // buttons={
        //   <>
        //     <a
        //       className={buttonVariants({ size: 'lg' })}
        //       href="https://forms.gle/TeXJmeFWn1SA83vy8"
        //     >
        //       {t('primary_button')}
        //     </a>

        //   </>
        // }
      />
  
    </Section>
  );
};

export { Hero };
