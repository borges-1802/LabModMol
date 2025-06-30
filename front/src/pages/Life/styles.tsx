import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh; /* Usar min-height para garantir que o conteúdo não fique cortado */
    padding: 20px; /* Aumentar o padding para melhorar a responsividade */
    box-sizing: border-box;
    background-color: rgba(238, 238, 238, 0.11);
`;

export const Title = styled.h1`
    font-size: 2em; // Tamanho reduzido para telas menores
    color: #191A23; 
    margin-bottom: 15px;
    text-align: center; 
`;

export const Description = styled.p`
    font-size: 1em; // Tamanho reduzido para telas menores
    color: #666;
    margin-bottom: 30px; 
    text-align: center;
    max-width: 500px; 
    padding: 0 20px;
`;

export const EventCard = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    display: flex;
    gap: 24px;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const EventContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const EventTitle = styled.h3`
    font-size: 1.5rem;
    color: #0694A1;
    margin-bottom: 12px;
    font-weight: 600;
`;

export const EventDescription = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
`;

export const EventImage = styled.div`
    flex: 1;
    min-width: 300px;
    max-width: 400px;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        min-width: 100%;
        height: 200px;
    }
`;

export const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 20px;
`;