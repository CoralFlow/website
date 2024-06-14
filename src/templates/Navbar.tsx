"use client";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ModeToggle } from '@/templates/Theme';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { Logo } from './Logo';

const Navbar = () => {
  const t = useTranslations('Navbar');
  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo/>}
        rightMenu={
          <>
              <li>
              <ModeToggle />
              </li>
          </>
        }
      >
        {/* <li>
          <Link href="/sign-up">{t('product')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('docs')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('blog')}</Link>
        </li>

        <li>
          <Link href="github">{t('community')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('company')}</Link>
        </li> */}
      </CenteredMenu>
    </Section>
  );
};

export { Navbar };
