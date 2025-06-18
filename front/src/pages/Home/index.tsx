import { motion } from 'framer-motion';
import {
  Image, Text, MainText, Introduction, Container, Title, Upper, TextGroup, BlackButton, Pic, StyledLink, ImageGroup, SupportText, Southeast, Southwest, ImageCaption, ContainerTopo, Container2, Image2, Section, SectionContent, SectionImage, SectionTitle, SectionText
} from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ButtonBlue from '../../components/buttonBlue';
import { ButtonContainer } from '../Publication/styles';
import homeImg from '../../assets/home.png';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        {/* Seção 1: Imagem do Laboratório */}
        <Section>
          <ContainerTopo>
            <Image src={homeImg} alt="Imagem do laboratório" />
          </ContainerTopo>
        </Section>

        {/* Seção 2: Boas-vindas */}
        <Section>
          <Container2>
            <TextGroup>
              <Title>
                Bem-vindo ao site do Laboratório de Modelagem Molecular QSAR!
              </Title>
            </TextGroup>
            <MainText>
              O Lab ModMolQSAR atua nas áreas (expecificar) e possui o objetivo de (explicar objetivo).
            </MainText>
            <ButtonContainer>
              <ButtonBlue href="/sobre">Conheça mais sobre o laboratório</ButtonBlue>
            </ButtonContainer>
          </Container2>
        </Section>

        {/* Seção 3: Áreas de Pesquisa */}
        <Section>
          <SectionContent>
            <SectionText>
              <SectionTitle>Áreas de Pesquisa</SectionTitle>
              <Text>
                Descrição das áreas de pesquisa do laboratório...
              </Text>
              <ButtonContainer>
                <ButtonBlue href="/areas-pesquisa">Saiba mais</ButtonBlue>
              </ButtonContainer>
            </SectionText>
            <SectionImage>
              {/* Imagem a ser definida */}
              <ImageCaption>IMAGEM ÁREAS DE PESQUISA</ImageCaption>
            </SectionImage>
          </SectionContent>
        </Section>

        {/* Seção 4: Imagem à esquerda, texto à direita */}
        <Section>
          <SectionContent reverse>
            <SectionImage>
              {/* Imagem a ser definida */}
              <ImageCaption>IMAGEM SECUNDÁRIA</ImageCaption>
            </SectionImage>
            <SectionText>
              <SectionTitle>Banco de Dados</SectionTitle>
              <Text>
                Descrição da seção...
              </Text>
              <ButtonContainer>
                <ButtonBlue href="/secao">Saiba mais</ButtonBlue>
              </ButtonContainer>
            </SectionText>
          </SectionContent>
        </Section>
      </Container>
      <Footer />
    </>
  );
}