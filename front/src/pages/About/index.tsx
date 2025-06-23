import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/button';
import { Container, Title, ButtonContainer, Bottom, Image, ImageGroup, SupportText, Section, SectionTitle, SectionContent } from './styles.tsx';
import Header from '../../components/header';
import Footer from '../../components/footer';

const About: React.FC = () => {
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
                    Sobre nós
                </Title>


                <Section>
                    <SectionTitle>O que é o ModMolQSAR</SectionTitle>
                    <SectionContent>
                       O <b>ModMolQSAR – Laboratório de Modelagem Molecular e QSAR</b> é um laboratório de pesquisa da Faculdade de Farmácia da Universidade Federal do Rio de Janeiro (UFRJ), criado em 2003, com foco no desenvolvimento e aplicação de métodos computacionais nas diferentes etapas do da pesquisa e desenvolvimento (P&D) de candidatos a fármacos — desde a identificação de alvos terapêuticos até a avaliação preditiva exigida por agências reguladoras.
                       <p>Desde a sua criação, o ModMolQSAR já formou <b>32 mestres e 28 doutores</b>, contribuindo de forma significativa para a capacitação de recursos humanos altamente qualificados nas áreas de Farmácia, Química e Ciências Farmacêuticas. O laboratório também acolhe estudantes de graduação, pós-doutorado e colaboradores em formação contínua.</p>

                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Quais as áreas internas</SectionTitle>
                    <SectionContent>
                        Com ênfase em diferentes técnicas de modelagem molecular - como <b>quimioinformática , modelos QSAR (Quantitative Structure–Activity Relationship), docking e dinâmica molecular</b>, o laboratório atua em projetos multi e transdisciplinares voltados à descoberta e otimização de fármacos, reposicionamento de fármacos e viabilizando o uso de inteligência artificial no âmbito regulatório de medicamentos, cosméticos, agroquímicos e outros produtos sujeitos a controle sanitário.
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Quais nossos objetivos</SectionTitle>
                    <SectionContent>
                        Nosso compromisso é produzir ciência de excelência, contribuir para o avanço do conhecimento e promover a inovação em saúde por meio de abordagens sustentáveis e eticamente responsáveis.
                    </SectionContent>
                </Section>

            </Container>
            <Footer />
        </>
    );
};

export default About;