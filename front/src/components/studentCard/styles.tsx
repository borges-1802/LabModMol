import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const InfoContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

export const Role = styled.p`
  font-size: 1rem;
  color: #0694A1;
  margin: 0;
  font-weight: 500;
`;

export const MemberDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 1rem 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f0f0;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    background: #0694A1;
    color: white;
  }
`; 