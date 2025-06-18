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

export const Section = styled.div`
    margin-bottom: 60px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const SectionTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    color: #0694A1;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    &::after {
        content: '';
        flex: 1;
        height: 3px;
        background: #0694A1;
        margin-left: 20px;
    }
`;

export const SectionContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    padding: 0 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
`;

export const Bottom = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const Image = styled(motion.img)`
    display: flex;
    width: 100px;
    border-radius: 10px;
    transition: transform 0.3s;
    cursor: grab;

    @media (max-width: 768px) {
        width: 60px;
        border-radius: 10px;
    }

    &:active {
        cursor: grabbing;
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