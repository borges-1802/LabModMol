import React from 'react';
import { Card, PhotoContainer, Photo, InfoContainer, Name, Role, MemberDescription, SocialLinks, SocialButton } from './styles';
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

interface TeamMemberCardProps {
  name: string;
  role: string;
  photo: string;
  description: string;
  lattes: string;
  linkedin: string;
  email: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  photo,
  description,
  lattes,
  linkedin,
  email,
}) => {
  return (
    <Card>
      <PhotoContainer>
        <Photo src={photo} alt={name} />
      </PhotoContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <MemberDescription>{description}</MemberDescription>
        <SocialLinks>
          <SocialButton href={lattes} target="_blank" rel="noopener noreferrer">
            <FaFileAlt size={20} />
          </SocialButton>
          <SocialButton href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </SocialButton>
          <SocialButton href={`mailto:${email}`}>
            <FaEnvelope size={20} />
          </SocialButton>
        </SocialLinks>
      </InfoContainer>
    </Card>
  );
};

export default TeamMemberCard; 