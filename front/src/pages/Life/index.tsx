import React from 'react';
import { motion } from 'framer-motion';
import { Container, Title } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Life: React.FC = () => {
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
                        Em breve
                    </Title>
                </Container>
                <Footer />
           </>
    );
};

export default Life;