import {
  Image, Text, MainText, Container, Title, TextGroup, ContainerTopo, Container2, Section, SectionContent, SectionImage, SectionTitle, SectionText, LocationContent, LocationInfo, LocationMap, LocationTitle, PublicacoesTitle, PublicacoesText
} from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ButtonBlue from '../../components/buttonBlue';
import { ButtonContainer } from '../Publication/styles';
import homeImg from '../../assets/fotoHome.png';
import homePesquisa from '../../assets/fotoPesquisa.png';
import homePublicacoes from '../../assets/fotoPubli.jpg';

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
              Conheça um pouco mais sobre o nosso laboratório!
            </MainText>
            <ButtonContainer>
              <ButtonBlue href="/About">Clique e confira um pouco sobre nós</ButtonBlue>
            </ButtonContainer>
          </Container2>
        </Section>

        {/* Seção 3: Research */}
        <Section>
          <SectionContent>
            <SectionText>
              <SectionTitle>Áreas de Pesquisa</SectionTitle>
              <Text>
                Conheça nossas principais linhas de pesquisa em toxicologia computacional, farmacocinética e desenvolvimento de fármacos, voltadas para soluções inovadoras em saúde e ciência.
              </Text>
              <ButtonContainer>
                <ButtonBlue href="/Research">Saiba mais</ButtonBlue>
              </ButtonContainer>
            </SectionText>
            <SectionImage>
              <Image src={homePesquisa} alt="Pesquisas do laboratório" />
            </SectionImage>
          </SectionContent>
        </Section>
        <div style={{marginBottom: '2.5rem'}} />

        {/* Seção 4: Imagem à esquerda, texto à direita */}
        <Section>
          <SectionContent>
            <SectionImage>
              <Image src={homePublicacoes} alt="Pesquisas do laboratório" />
            </SectionImage>
            <SectionText>
              <PublicacoesTitle>Publicações</PublicacoesTitle>
              <PublicacoesText>
                O Laboratório ModMolQSAR desenvolve pesquisas científicas inovadoras. Nossas publicações refletem o compromisso com a excelência acadêmica e a contribuição para o avanço do conhecimento científico. Confira nossas publicações para saber mais sobre os resultados e impactos dos nossos estudos.
              </PublicacoesText>
              <ButtonContainer>
                <ButtonBlue href="/Publication">Saiba mais</ButtonBlue>
              </ButtonContainer>
            </SectionText>
          </SectionContent>
        </Section>

        {/* Seção 5: Localização */}
        <Section style={{paddingBottom: '2.5rem', paddingTop: '2.5rem'}}>
          <LocationContent style={{marginTop: 0, marginBottom: 0, padding: 0}}>
            <LocationInfo>
              <LocationTitle>Nosso Local</LocationTitle>
              <Text>
                Laboratório de Modelagem Molecular & QSAR - ModMolQSAR<br />
                Faculdade de Farmácia, bloco L subsolo<br />
                Centro de Ciências da Saúde - CCS, Cidade Universitária, Rio de Janeiro<br />
                <br />
                <b>Email:</b> modmolqsar@gmail.com
              </Text>
            </LocationInfo>
            <LocationMap style={{margin: 0, padding: 0}}>
              <iframe
                title="Mapa Laboratório ModMolQSAR"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.4885099178122!2d-43.23435825838804!3d-22.842482879701667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99793624d528cf%3A0x470160417d9e2afd!2sCCS%20-%20Universidade%20Federal%20do%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sus!4v1751291825084!5m2!1spt-BR!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </LocationMap>
          </LocationContent>
        </Section>
      </Container>
      <div style={{paddingTop: '2.5rem'}} />
      <Footer />
    </>
  );
}