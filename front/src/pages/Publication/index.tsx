import React from 'react';
import { motion } from 'framer-motion';
import { Container, Title, Description, YearSection, YearTitle, YearLine, PublicationsGrid } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PublicationCard from '../../components/PublicationCard';

interface Publication {
    title: string;
    description: string;
    link: string;
}

interface PublicationsData {
    [key: string]: Publication[];
}

const Publication: React.FC = () => {
    // Example data - replace with your actual publications data
    const publications: PublicationsData = {
        '2024': [
            {
                title: 'Novos avanços em modelagem molecular',
                description: 'Pesquisa sobre técnicas avançadas de modelagem molecular aplicadas em fármacos. Este estudo apresenta resultados significativos na otimização de processos de desenvolvimento de medicamentos, utilizando métodos computacionais inovadores.',
                link: 'https://examplo.com/publication1'
            },
            {
                title: 'Análise de proteínas',
                description: 'Estudo sobre a estrutura e função de proteínas em sistemas biológicos. A pesquisa investiga as interações moleculares e suas implicações no desenvolvimento de novas terapias.',
                link: 'https://examplo.com/publication2'
            }
        ],
        '2023': [
            {
                title: 'Desenvolvimento de fármacos',
                description: 'Pesquisa sobre o desenvolvimento de novos fármacos usando técnicas computacionais. O estudo demonstra a eficácia de algoritmos de machine learning na predição de propriedades farmacológicas.',
                link: 'https://examplo.com/publication3'
            }
        ]
    };

    // Sort years in descending order
    const sortedYears = Object.keys(publications).sort((a, b) => Number(b) - Number(a));

    return (
        <>
            <Header />
            <Container>
                <Title>
                    Publicações
                </Title>
                <Description>
                    Bem-vindo à página de publicações. Aqui você encontrará as publicações científicas do nosso laboratório, organizadas por ano.
                </Description>

                {sortedYears.map((year) => (
                    <YearSection key={year}>
                        <YearTitle>
                            {year}
                            <YearLine />
                        </YearTitle>
                        <PublicationsGrid>
                            {publications[year].map((pub: Publication, index: number) => (
                                <PublicationCard
                                    key={index}
                                    title={pub.title}
                                    description={pub.description}
                                    link={pub.link}
                                />
                            ))}
                        </PublicationsGrid>
                    </YearSection>
                ))}
            </Container>
            <Footer />
        </>
    );
};

export default Publication;