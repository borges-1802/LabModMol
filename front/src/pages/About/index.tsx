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
                    <SectionTitle>História</SectionTitle>
                    <SectionContent>
                        O Laboratório de Modelagem Molecular e QSAR foi fundado com o objetivo de 
                        desenvolver pesquisas inovadoras na área de modelagem molecular e relações quantitativas 
                        estrutura-atividade.
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>O que é o ModMolQSAR</SectionTitle>
                    <SectionContent>
                        O ModMolQSAR é uma plataforma desenvolvida para auxiliar pesquisadores na área de 
                        modelagem molecular e QSAR, oferecendo ferramentas e recursos para análise e 
                        desenvolvimento de modelos preditivos.
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>O que é o laboratório</SectionTitle>
                    <SectionContent>
                        O Laboratório de Modelagem Molecular e QSAR (ModMolQSAR) está ligado ao Departamento de Fármacos
                        e Medicamentos da Faculdade de Farmácia, localizada no Centro de Ciências da Saúde (CCS) da Universidade Federal do
                        Rio de Janeiro (UFRJ). Coordenado pelo Professor Carlos Rangel Rodrigues em colaboração com a Professora Alessandra Mendonça
                        Teles Souza, o grupo de pesquisa é constituído por pós-doutorandos, alunos de doutorado, mestrado e iniciação científica, todos
                        com suporte financeiro proveniente de instituições como Capes, CNPq e FAPERJ.
                        Nosso laboratório é um centro de excelência em pesquisa, dedicado ao desenvolvimento 
                        de metodologias computacionais e experimentais para o estudo de interações moleculares 
                        e propriedades físico-químicas.
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Quais nossos objetivos</SectionTitle>
                    <SectionContent>
                        • Desenvolver metodologias inovadoras em modelagem molecular
                        • Contribuir para o avanço científico na área de QSAR
                        • Formar profissionais qualificados
                        • Estabelecer parcerias com instituições nacionais e internacionais
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Quais as áreas internas</SectionTitle>
                    <SectionContent>
                        • Modelagem Molecular
                        • QSAR e QSPR
                        • Desenvolvimento de Software
                        • Análise de Dados
                        • Bioinformática
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Quem somos nós</SectionTitle>
                    <SectionContent>
                        Somos uma equipe multidisciplinar composta por pesquisadores, professores e estudantes 
                        dedicados ao avanço da ciência através da modelagem molecular e QSAR. Nossa equipe 
                        combina expertise em química, biologia, computação e estatística.
                    </SectionContent>
                </Section>

                <ButtonContainer>
                    <Button href="/">Voltar para Home</Button>
                </ButtonContainer>
            </Container>
            <Footer />
        </>
    );
};

export default About;