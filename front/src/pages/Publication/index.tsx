import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/button';
import { Container, Title, Description, ButtonContainer, Bottom, Image, ImageGroup, SupportText } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Farmacia from '../../assets/farmacia_logo.png';
import UFRJ from '../../assets/ufrj_logo.png';
import CNPQ from '../../assets/cnpq_logo.png';
import Faperj from '../../assets/faperj_logo.png';

const Publication: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Title>
                    Publicações
                </Title>
                <Description>
                    Bem-vindo à página de publicações. Aqui você verá as publicações apresentadas nos últimos 5 anos.
                </Description>
                <ButtonContainer>
                  <Button>Em breve novidades</Button>
                </ButtonContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Publication;