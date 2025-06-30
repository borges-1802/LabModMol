import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(238, 238, 238, 0.11);
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  align-items: center;
`;

export const Title = styled.h1`
  color: #000;
  font-family: 'Poppins';
  font-size: clamp(2rem, 5vw, 3rem);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
  padding-left: 0;
  padding-right: 0;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Section = styled.section`
  margin-top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
`;

export const Upper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
    align-items: center;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
  margin-top: auto; /* Push Bottom to the bottom of Main */

  @media (max-width: 768px) {
    margin-top: 2rem;
    align-items: center;
    flex-direction: column;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
  text-align: center;
`;

export const Text = styled.p`
  color: #000;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const BlackButton = styled.button`
  display: flex;
  padding: 20px 35px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 14px;
  background: var(--Dark, #191A23);
  color: var(--White, #FFFFFF);
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; 
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px 30px;
  }
`;

export const Pic = styled.img`
  display: flex;
  width: 512px;
  height: 512px;
  flex-shrink: 0;
  border-radius: 35px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  z-index: 0;
`;

export const SupportText = styled.p`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Southeast = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  gap: 1rem; /* Espaço entre as imagens e o texto */
`;

export const Southwest = styled.p`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; 
  text-align: left; /* Alinha o texto à esquerda */
  margin-top: 10rem; /* Espaço acima do texto */
  width: 100%; /* Garante que o texto ocupe a largura total */
`;

export const Introduction = styled.div`
`

export const Image2 = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 8px;
`;

export const ImageCaption = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin: 1rem 0;
  font-style: italic;
`;

export const ContainerTopo = styled.div`
  width: 100vw;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding: 0;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 0;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 0 0 3rem 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding-left: 0;
  padding-right: 0;
  align-items: flex-start;

  button, a {
    font-size: 0.95rem !important;
    padding: 8px 18px !important;
    border-radius: 8px !important;
    min-width: unset !important;
    box-shadow: none !important;
  }

  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TextButton = styled.div`
    
`;

export const SectionContent = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  margin: 0;
  box-sizing: border-box;
  background: #D9D9D9;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const SectionText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
  width: 100%;
  max-width: 50%;
  box-sizing: border-box;
`;

export const SectionImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 100%;
  max-width: 50%;
  box-sizing: border-box;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SectionTitle = styled.h2`
  color: #000;
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const MainText = styled.p`
  color: #222;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  text-align: center;
  margin-top: 0.25rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const LocationContent = styled(SectionContent)`
  align-items: stretch;
  background: #0694A1;
  padding: 2rem 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.04);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const LocationInfo = styled(SectionText)`
  max-width: 45%;
  min-width: 250px;
  justify-content: center;
  color: #fff;
  padding: 0 3rem 0 3.5rem;
  text-align: left;
  @media (max-width: 768px) {
    max-width: 100%;
    min-width: unset;
    padding: 0 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const LocationMap = styled(SectionImage)`
  max-width: 55%;
  min-width: 250px;
  min-height: 300px;
  padding: 0;
  background: none;
  @media (max-width: 768px) {
    max-width: 100%;
    min-width: unset;
    min-height: 200px;
    padding: 0;
  }
  iframe {
    width: 100%;
    height: 100%;
    min-height: 300px;
    border: 0;
    border-radius: 8px;
    @media (max-width: 768px) {
      min-height: 200px;
    }
  }
`;

export const LocationTitle = styled(SectionTitle)`
  margin-bottom: 0.5rem;
`;

export const PublicacoesTitle = styled(SectionTitle)`
  text-align: right;
`;

export const PublicacoesText = styled(Text)`
  text-align: right;
`;
