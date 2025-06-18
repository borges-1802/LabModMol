import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/button';
import { Container, Title, Description, ButtonContainer, Bottom, Image, ImageGroup, SupportText, Section, SectionTitle, SectionContent } from './styles';
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
                    Temos a atuação em algumas frentes de pesquisa:
                </Description>

                <Section>
                    <SectionTitle>Nome 1</SectionTitle>
                    <SectionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Nome 2</SectionTitle>
                    <SectionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle>Nome 3</SectionTitle>
                    <SectionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </SectionContent>
                </Section>

                <ButtonContainer>
                    <Button href="/">Voltar para Home</Button>
                </ButtonContainer>

                <Bottom>
                    <SupportText>
                        Agradecemos o apoio das seguintes agências de fomento e instituições:
                    </SupportText>
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