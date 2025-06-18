import styled from 'styled-components';

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
    font-family: 'Poppins', sans-serif;
`;

export const Section = styled.div`
    width: 100%;
    margin-bottom: 24px;
    padding: 24px;
    background: #FFFFFF;
    border-radius: 8px;
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
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
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
    
    ul {
        list-style-type: none;
        padding-left: 1rem;
    }
    
    li {
        margin-bottom: 0.8rem;
        position: relative;
        padding-left: 1.5rem;

        &::before {
            content: '•';
            color: #0694A1;
            position: absolute;
            left: 0;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
`;

export const Bottom = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ImageGroup = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

export const SupportText = styled.p`
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    text-align: center;
    margin: 1rem 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`;