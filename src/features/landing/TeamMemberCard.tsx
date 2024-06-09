import React from 'react';
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

type SocialLinks = {
  linkedIn?: string;
  twitter?: string;
  github?: string;
};

type TeamMemberCardProps = {
  name: string;
  image: string;
  bio: string;
  socialLinks: SocialLinks;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image, bio, socialLinks }) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />

    <div className="mt-2 text-lg font-bold">{name}</div>
    <div className="text-muted-foreground">{role}</div>

    <div className="my-3 w-8 border-t border-purple-400" />

    <div className="mt-2 text-muted-foreground">{bio}</div>

    <div className="mt-4 flex justify-around">
      {socialLinks.linkedIn && (
        <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
            <LinkedInLogoIcon className="mr-1 size-5" />
        </a>
      )}
      {/* {socialLinks.twitter && (
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
      )} */}
      {socialLinks.github && (
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="mr-1 size-5" />
        </a>
      )}
    </div>
  </div>
);

export { TeamMemberCard };