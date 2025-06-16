import styled from 'styled-components';

// Publication Page Styles
export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    color: #666;
    text-align: center;
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`;

export const YearSection = styled.div`
    margin-bottom: 60px;
`;

export const YearTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 1.8rem;
    font-weight: 700;
    color: #0694A1;
    font-family: 'Poppins', sans-serif;
`;

export const YearLine = styled.div`
    flex: 1;
    height: 3px;
    background: #0694A1;
    margin-left: 20px;
`;

export const PublicationsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 20px;
`;

// PublicationCard Styles
export const CardContainer = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 16px;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 12px;
    font-weight: 600;
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px; 
    flex-wrap: wrap; /* Permitir que os botões quebrem para a próxima linha em telas pequenas */
    justify-content: center; /* Centralizar os botões */
    flex-direction: column;
`;

export const Bottom = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  gap: 1rem; /* Espaço entre as imagens e o texto */
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
  display: flex;
  width: 100px;
  border-radius: 10px;
  transition: transform 0.3s; 

  @media (max-width: 768px) {
    width: 60px;
    border-radius: 10px;
  }

  &:hover {
    transform: rotate(90deg) scale(1.1); 
  }
`;
