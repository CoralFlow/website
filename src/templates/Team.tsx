import { Background } from '@/components/Background';
import { TeamMemberCard } from '@/features/landing/TeamMemberCard'; 
import { Section } from '@/features/landing/Section';

const Team = () => {

  // Sample data
  const teamMembers = [
    {
      id: '1',
      name: 'Sunil N',
      image: '/assets/team/sunil.jpg',
      bio: 'Instructor',
      socialLinks: {
        linkedIn: 'https://linkedin.com/in/sunil-',
        twitter: 'https://twitter.com/johndoe',
        github: 'https://github.com/linusaltacc',
      },
    },
    {
      id: '2',
      name: 'Vishnuraj S',
      image: '/assets/team/vishnu.jpg',
      bio: 'Instructor',
      socialLinks: {
        linkedIn: 'https://www.linkedin.com/in/vishnuraj-saravanan/',
        twitter: 'https://twitter.com/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    {
      id: '3',
      name: 'Yogeshwaran S',
      image: '/assets/team/yogesh.jpg',
      bio: 'Instructor',
      socialLinks: {
        linkedIn: 'https://www.linkedin.com/in/yogeshwaran-singarasu/',
        twitter: 'https://twitter.com/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
  ];

  return (
    <Background>
      <Section
        subtitle={''}
        title={"Meet our Team"}
        description={''}
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