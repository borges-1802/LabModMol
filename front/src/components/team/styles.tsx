import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

export const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 350px;
  }
`;

export const PhotoContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

export const Role = styled.h3`
  font-size: 1.1rem;
  color: #0694A1;
  margin: 0;
  font-weight: 500;
`;

export const MemberDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    background: #0694A1;
    color: white;
  }
`; 