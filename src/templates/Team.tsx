import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { TeamMemberCard } from '@/features/landing/TeamMemberCard'; // You need to create this component
import { Section } from '@/features/landing/Section';

const Team = () => {
  const t = useTranslations('Team');

  // Sample data
  const teamMembers = [
    {
      id: '1',
      name: t('team1_name'),
      image: 'https://example.com/images/john_doe.jpg',
      bio: t('instructor1_description'),
      socialLinks: {
        linkedIn: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
  ];

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              image={member.image}
              bio={member.bio}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </Section>
    </Background>
  );
};

export { Team };