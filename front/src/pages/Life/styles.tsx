import styled from 'styled-components';
import { motion } from 'framer-motion';

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