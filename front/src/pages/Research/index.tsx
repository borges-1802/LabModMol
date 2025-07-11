import React from 'react';
import { motion } from 'framer-motion';
import { Container, Title, Description, Bottom, Image, ImageGroup, Section, SectionTitle, SectionContent } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Farmacia from '../../assets/farmacia_logo.png';
import UFRJ from '../../assets/ufrj_logo.png';
import CNPQ from '../../assets/cnpq_logo.png';
import Faperj from '../../assets/faperj_logo.png';

const Research: React.FC = () => {
    return (
        <>
            <Header />
            <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Title
                    as={motion.h1}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Pesquisa
                </Title>
                <Description
                    as={motion.p}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Apresentamos as frentes de pesquisa do ModMolQSAR:
                </Description>

                <Section>
                    <SectionTitle>Toxicologia computacional</SectionTitle>
                    <SectionContent>
                        <p>- Desenvolvimento de modelos QSAR para avaliação de risco de substâncias bioativas;</p>
                        <p>- Avaliação de risco humano e ambiental e substâncias sujeitas a avaliação regulatória;</p>
                        <p>- Avaliação de risco de Produtos de Degradação (PDs) de IFAs conforme guias internacionais.</p>

                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Farmacocinética computacional</SectionTitle>
                    <SectionContent>
                        <p>- Avaliação de biodisponibilidade oral;</p>
                        <p>- Investigação das reações metabólicas;</p>
                        <p>- Modelagem PBPK e simulação: E marcos clínicos virtuais e desenvolvimento de formações.</p>

                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Desenvolvimento de fármacos</SectionTitle>
                    <SectionContent>
                        <p>- Modelagem e Simulação de sistemas biológicos por docking e dinâmica molecular;</p>
                        <p>- Busca por novos alvos terapêuticos.</p>

                    </SectionContent>
                </Section>

                <Bottom>
                    <Description>
                    Agradecemos o apoio das seguintes agências de fomento e instituições:
                </Description>
                    <ImageGroup>
                        <Image 
                            src={CNPQ} 
                            alt="CNPq"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            dragSnapToOrigin
                            drag
                        />
                        <Image 
                            src={Faperj} 
                            alt="FAPERJ"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            dragSnapToOrigin
                            drag
                        />
                        <Image 
                            src={UFRJ} 
                            alt="UFRJ"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            dragSnapToOrigin
                            drag
                        />
                        <Image 
                            src={Farmacia} 
                            alt="Faculdade de Farmácia"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            dragSnapToOrigin
                            drag
                        />
                    </ImageGroup>
                </Bottom>
            </Container>
            <Footer />
        </>
    );
};

export default Research;