import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/button';
import { Container, Title, Description, ButtonContainer, Bottom, Image, ImageGroup, SupportText } from './styles';
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
                <Description
                    as={motion.p}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    História
O que é o ModMolQSAR
O que é o laboratório
Quais nossos objetivos
Quais as áreas internas
Quem somos nós

                </Description>
                <ButtonContainer>
                    <Button>Em breve</Button>
                </ButtonContainer>
            </Container>
            <Footer />
        </>
    );
};

export default About;