import { motion } from 'framer-motion';
import {
  Image, Text, Introduction, Main, Container, Title, Upper, TextGroup, BlackButton, Pic, StyledLink, ImageGroup, SupportText, Southeast, Southwest
} from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Home() {
  return (
      <>
      <Header />
      <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Main>
            <TextGroup>
              <Title
                as={motion.h1}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Laboratório de Modelagem Molecular QSAR
              </Title>

              <Text
                as={motion.p}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Uma equipe diretamente da Faculdade de Farmácia da UFRJ, o laboratório mais bonito do Brasil!!
              </Text>
            </TextGroup>
            <Introduction>


            </Introduction>
        </Main>
      </Container>
      <Footer />
      </>
  );
}