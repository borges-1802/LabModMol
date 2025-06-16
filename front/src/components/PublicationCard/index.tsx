import React from 'react';
import { CardContainer, CardTitle, CardDescription, CardLink } from './styles';

interface PublicationCardProps {
    title: string;
    description: string;
    link?: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ title, description, link }) => {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            {link && (
                <CardLink href={link} target="_blank" rel="noopener noreferrer">
                    Acessar publicação
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </CardLink>
            )}
        </CardContainer>
    );
};

export default PublicationCard; 