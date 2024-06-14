import { getTranslations } from 'next-intl/server';
import { CTA } from '@/templates/CTA';
import { FAQ } from '@/templates/FAQ';
import { Features } from '@/templates/Features';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';
import { Team } from '@/templates/Team';
import { GoogleGeminiEffectDemo } from '@/templates/gemini';


export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <GoogleGeminiEffectDemo />
      {/* <Hero /> */}
      <Features />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
