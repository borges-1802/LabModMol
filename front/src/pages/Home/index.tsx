import { motion } from 'framer-motion';
import {
  Image, Text, Introduction, Main, Container, Title, Upper, TextGroup, BlackButton, Pic, StyledLink, ImageGroup, SupportText, Southeast, Southwest, ImageCaption, ContainerTopo, Container2, Image2
} from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';

import ButtonBlue from '../../components/buttonBlue';
import { ButtonContainer } from '../Publication/styles';

export default function Home() {
  return (
      <>
      <Header />
      <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Main>
        <ContainerTopo>
          <ImageCaption>IMAGEM DO LABORATÓRIO/CCS</ImageCaption>
        </ContainerTopo>

        <Container2>
            <TextGroup>
              <Title
                as={motion.h1}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Bem-vindo ao site do Laboratório de Modelagem Molecular QSAR!
              </Title>
            </TextGroup>
        
              <Text
                as={motion.p}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                O Lab ModMolQSAR atua nas áreas (expecificar) e possui o objetivo de (explicar objetivo).
              </Text>

            <ButtonContainer>
              <ButtonBlue>Conheça mais sobre o laboratório</ButtonBlue>

            </ButtonContainer>
        </Container2>

            <Introduction>


            </Introduction>
        </Main>
      </Container>
      <Footer />
      </>
  );
}