import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
`;

export const Section = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
`;

export const SectionContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    
    ul {
        list-style-type: none;
        padding-left: 1rem;
    }
    
    li {
        margin-bottom: 0.5rem;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;

export const Bottom = styled.div`
    margin-top: 2rem;
    text-align: center;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
`;

export const ImageGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;
`;

export const SupportText = styled.p`
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
`;