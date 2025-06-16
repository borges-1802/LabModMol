import styled from 'styled-components';

export const CardContainer = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 32px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;
    border: 1px solid #e5e7eb;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 16px;
    font-weight: 600;
`;

export const CardDescription = styled.p`
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 100%;
`;

export const CardLink = styled.a`
    color: #0694A1;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    transition: color 0.2s;
    font-weight: 500;

    &:hover {
        color: #047481;
        text-decoration: underline;
    }

    svg {
        transition: transform 0.2s;
    }

    &:hover svg {
        transform: translate(2px, -2px);
    }
`; 