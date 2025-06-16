import React from 'react';
import { FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import {
  Card,
  PhotoContainer,
  Photo,
  InfoContainer,
  Name,
  Role,
  MemberDescription,
  SocialLinks,
  SocialButton
} from './styles';

interface StudentCardProps {
  name: string;
  role: string;
  photo: string;
  description: string;
  lattes?: string;
  linkedin?: string;
  email?: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  name,
  role,
  photo,
  description,
  lattes,
  linkedin,
  email
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
          {lattes && (
            <SocialButton href={lattes} target="_blank" rel="noopener noreferrer">
              <FaFileAlt />
            </SocialButton>
          )}
          {linkedin && (
            <SocialButton href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialButton>
          )}
          {email && (
            <SocialButton href={`mailto:${email}`}>
              <FaEnvelope />
            </SocialButton>
          )}
        </SocialLinks>
      </InfoContainer>
    </Card>
  );
};

export default StudentCard; 