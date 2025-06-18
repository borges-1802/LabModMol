import React from 'react';
import { Container, Title, Description, TeamGrid, SectionTitle } from './styles';
import TeamMemberCard from '../../components/team/TeamMemberCard';
import StudentCard from '../../components/studentCard';
import Header from '../../components/header';
import Footer from '../../components/footer';

import generic from '../../assets/people/generic.png';
import alessandra from '../../assets/people/alessandra.png';
import ana from '../../assets/people/ana.png';
import barbara from '../../assets/people/barbara.png';
import gabriel from '../../assets/people/gabriel.png';
import daniel from '../../assets/people/daniel.png';
import loiane from '../../assets/people/loiane.png';
//import roger from '../../assets/people/roger.png';
import stephane from '../../assets/people/stephane.png';
import alberto from '../../assets/people/alberto.png';
import eduarda from '../../assets/people/eduarda.png';
import julia from '../../assets/people/julia.png';
import beatriz from '../../assets/people/fotoBeatriz.jpeg';
import eduardo from '../../assets/people/eduardo.png';
import joaop from '../../assets/people/joaopedro.png';
//import joaov from '../../assets/people/fotoJoaoVictor.jpeg';
//import juliana from '../../assets/people/juliana.png';
import mariana  from '../../assets/people/fotoMariana.jpeg';
import paulo from '../../assets/people/fotoPaulo.jpeg';

const People: React.FC = () => {
  const teamMembers = {
    professores: [
      {
        id: 1,
        name: "Carlos Rangel Rodrigues",
        role: "Coordenador",
        photo: generic,
        description: "Professor e coordenador do Laboratório de Modelagem Molecular e QSAR. Especialista em modelagem molecular, QSAR e desenvolvimento de fármacos.",
        lattes: "http://lattes.cnpq.br/4265523459861860",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 2,
        name: "Alessandra Mendonça Teles de Souza",
        role: "Vice-Coordenadora",
        photo: alessandra,
        description: "Professora e vice-coordenadora do Laboratório. Especialista em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "http://lattes.cnpq.br/7047409069633400",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 3,
        name: "Ana Carolina Rennó Sodero",
        role: "Professora Colaboradora",
        photo: ana,
        description: "Professora do Laboratório. Especialista em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "http://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 4,
        name: "Bárbara de Azevedo Abrahim Vieira",
        role: "Professora Colaboradora",
        photo: barbara,
        description: "Professora do Laboratório. Especialista em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "http://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      }
    ],
    posdoutorado: [
      {
        id: 5,
        name: "Gabriel Rodrigues",
        role: "Pós Doutorando",
        photo: gabriel,
        description: "Pesquisador de pós-doutorado no ModMolQSAR-UFRJ, com doutorado em Neurologia (2022) e MBA em Data Science (USP). Atua em Biologia Computacional e Planejamento de Fármacos, com experiência em QSAR, docking, dinâmica molecular e predições ADMET. Possui domínio em Python, R, Machine Learning, automação e análise de dados aplicados à saúde.",
        lattes: "http://lattes.cnpq.br/1160489274315290",
        linkedin: "https://www.linkedin.com/in/gabriel-rodrigues-coutinho-pereira-biomedico/",
        email: "gabrielrodriguescp@gmail.com"
      }
    ],
      doutorado: [
      {
        id: 6,
        name: "Daniel Kibwila",
        role: "Doutorando",
        photo: daniel,
        description: "Over 10 years of laboratory experience in clinical and toxicological analyses, pharmaceutical technologies, and, more recently, computational methods. Expertise in the preparation and evaluation of innovative topical formulations, including cytotoxicity and mutagenicity assessments using advanced microbial testing, as well as Quantitative Structure-Activity Relationship (QSAR) analysis.",
        lattes: "http://lattes.cnpq.br/7190462009317700",
        linkedin: "https://www.linkedin.com/in/daniel-mabundu-kibwila-772a5234/",
        email: false
      },
        {
        id: 7,
        name: "Loiane Mendonça",
        role: "Doutoranda",
        photo: loiane,
        description: "Graduada em Biomedicina na Universidade Federal do Estado do Rio de Janeiro (2023) e Mestre em Biologia Celular e Molecular pelo PPGBMC-UNIRIO (2025). Pesquisadora no Laboratório de Bioinformatica e Biologia Computacional da Unirio. Doutoranda em Ciências Farmacêuticas pelo PPGCF - UFRJ, atuando como pesquisadora no Laboratório ModMolQSAR.",
        lattes: "https://lattes.cnpq.br/1628996600395875/",
        linkedin: "https://www.linkedin.com/in/loiane-mendonça",
        email: "loianemendoncaa@gmail.com"
      },
      {
        id: 8,
        name: "Roger",
        role: "Doutorando",
        photo: generic,
        description: "Possui graduação em Farmácia pela Universidade Federal do Rio de Janeiro (UFRJ) e mestrado pelo Programa de Pós-graduação em Ciências Farmacêuticas da UFRJ. Tem experiência nas áreas de biologia molecular, bioquímica, biofísica, química medicinal e modelagem molecular, utilizando técnicas espectroscópicas, calorimétricas, dinâmica molecular e de docking molecular para compreender sistemas biológicos, com aplicação no auxílio na otimização de fármacos por meio de análises termodinâmicas e estruturais.",
        lattes: "http://lattes.cnpq.br/1688889220092748",
        linkedin: false,
        email: "rogerborges@ufrj.br"
      },
      {
        id: 9,
        name: "Stephane Lourenço",
        role: "Doutoranda",
        photo: stephane,
        description: "Doutoranda em Ciências Farmacêuticas pela Universidade Federal do Rio de Janeiro (UFRJ) e Mestre em Biologia Molecular e Celular pela Universidade Federal do Estado do Rio de Janeiro (UNIRIO). Possui experiência no Laboratório de Bioinformática e Biologia Computacional (BIOINFO), onde realizou análises in silico de proteínas, incluindo predição funcional e estrutural de mutações, simulações por dinâmica molecular e modelagem estrutural de proteínas. Especialista em Análises Clínicas pela Faculdade Única de Ipatinga (FUNIP) e graduada em Biologia pela UNIRIO. Durante a graduação, atuou como bolsista de Iniciação Científica no Núcleo de Pesquisa em Sistemas Agrícolas (NUPSA), no Laboratório de Bioquímica e Função de Proteínas Vegetais.",
        lattes: "http://lattes.cnpq.br/7925041623012987",
        linkedin: false,
        email: "stephanelourenco20@gmail.com"
      }
    ],
    mestrado: [
      {
        id: 10,
        name: "Alberto Lyra",
        role: "Mestrando",
        photo: alberto,
        description: "Mestrando em Ciências Farmacêuticas (UFRJ), bolsista Capes. Farmacêutico (UFRJ, 2024). Pesquisador no grupo ModMolQSAR, atuando em QSAR. Realizou ICs em ecotoxicologia computacional (FAPERJ) e fitoquímica (PIBIC). Monitor de Química Farmacêutica Medicinal (2023). Técnico em Química (ETRR, 2017).",
        lattes: "http://lattes.cnpq.br/2185019515205927",
        linkedin: false,
        email: "betotl@ufrj.br"
      },
      {
        id: 11,
        name: "Eduarda Barreto",
        role: "Mestranda",
        photo: eduarda,
        description: "Mestranda em Ciências Farmacêuticas (PPGCF/UFRJ), desenvolve pesquisa em Química Medicinal e Inteligência Artificial para planejamento de antimicrobianos para cepas resistentes. Graduada em Farmácia (UFRJ), atua no Laboratório ModMolQSAR desde a iniciação científica, com experiência em modelagem molecular e estudos in silico para reposicionamento de fármacos no tratamento da leishmaniose cutânea.",
        lattes: "http://lattes.cnpq.br/4346435446636907",
        linkedin: "https://linkedin.com/in/eduarda-barreto/",
        email: "brrduda@gmail.com"
      },
      {
        id: 12,
        name: "Júlia Mendes",
        role: "Mestranda",
        photo: julia,
        description: "Mestranda do Programa de Pós-graduação em Farmacologia e Química Medicinal (PPGFQM) do Instituto de Ciências Biomédicas (ICB) da Universidade Federal do Rio de Janeiro (UFRJ), bolsista Capes. Desenvolve pesquisa na área de modelagem molecular, utilizando as técnicas de triagem virtual e modelagem comparativa.",
        lattes: "http://lattes.cnpq.br/1121088958634576/",
        linkedin: false,
        email: "juliafortes18@gmail.com"
      }
    ],
    iniciacao: [
      { 
        id: 13,
        name: "Beatriz Ribeiro",
        role: "Aluna de Iniciação Científica",
        photo: beatriz,
        description: "Graduanda em Farmácia pela Universidade Federal do Rio de Janeiro (UFRJ), com ênfase em atividades de pesquisa científica e extensão universitária. Participa ativamente de projetos interdisciplinares voltados à promoção da saúde, educação científica e inovação tecnológica. Atualmente atua como estudante de iniciação científica no Laboratório de modelagem molecular e QSAR-3D (MODMOLQSAR), desenvolvendo atividades em docking molecular, dinâmica molecular e análise computacional de proteínas.",
        lattes: "https://lattes.cnpq.br/1296907041260344",
        linkedin: "https://www.linkedin.com/in/beatriz-sara-ribeiro-5bb0911a6",
        email: "beatrizsararibeiro@gmail.com"
      },
      {
        id: 14,
        name: "Eduardo Vilarim",
        role: "Aluno de Iniciação Científica",
        photo: eduardo,
        description: "Graduando em Farmácia (UFRJ), com experiência anterior como economista em análise de dados e mercado financeiro. Atualmente é bolsista PIBIC em pesquisa de inibidores para Alzheimer, com habilidades em Python e R.",
        lattes: "http://lattes.cnpq.br/8108501574359282",
        linkedin: false,
        email: "eduvilarim@gmail.com"
      },
      {
        id: 15,
        name: "João Pedro Araujo",
        role: "Aluno de Iniciação Científica",
        photo: joaop,
        description: "Acadêmico de Farmácia na UFRJ. Bolsista PIBIC-CNPq no laboratório ModMolQSAR, atuando com Docking, Dinâmica Molecular e modelos QSAR. Técnico em Análises Clínicas pela FAETEC, com estágio no Hospital Municipal Francisco da Silva Telles. Integrante do grupo de pesquisa ModMolQSAR (FF-UFRJ).",
        lattes: "http://lattes.cnpq.br/6963882962472772",
        linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-araujo-476433185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "jp.af.santos@gmail.com"
      },
      {
        id: 16,
        name: "João Victor Borges",
        role: "Aluno de Iniciação Científica",
        photo: generic,
        description: "Graduando em Ciência da Computação.",
        lattes: "http://lattes.cnpq.br/1656015756108559",
        linkedin: "https://br.linkedin.com/in/jo%C3%A3o-victor-borges-453020272",
        email: "joaovbn@dcc.ufrj.br"
      },
      ,{
        id: 17,
        name: "Juliana Lima",
        role: "Aluna de Iniciação Científica",
        photo: generic,
        description: "Adicionar Resumo.",
        lattes: "http://lattes.cnpq.br/7233468074161327",
        linkedin: "https://www.linkedin.com/in/juliana-lima-bb2593244",
        email: "ljulianinha9@gmail.com "
      },
      ,{
        id: 18,
        name: "Mariana Huber",
        role: "Aluna de Iniciação Científica",
        photo: mariana,
        description: "Graduanda em Farmácia pela Universidade Federal do Rio de Janeiro (UFRJ), atualmente participando, com o auxílio de bolsa PIBIC, no projeto de título 'Prospecção virtual de novos derivados de tioureia com atividade antiagregante plaquetária' no Laboratório de Modelagem Molecular QSAR, ligado ao Departamento de Fármacos e Medicamentos da Faculdade de Farmácia, localizada no Centro de Ciências da Saúde (CCS).",
        lattes: "http://lattes.cnpq.br/5107447453747071",
        linkedin: false,
        email: "mabhuber@gmail.com"
      },
      ,{
        id: 19,
        name: "Paulo Falco",
        role: "Aluno de Iniciação Científica",
        photo: paulo,
        description: "Técnico em Química Industrial pelo Instituto Federal do Rio de Janeiro (2023), atualmente cursa Graduação em Farmácia pela Universidade Federal do Rio de Janeiro. Possui experiência na área de Química Orgânica e Modelagem Molecular, sendo bolsista pesquisador pelo LabModMolQSAR (FF, UFRJ).",
        lattes: "http://lattes.cnpq.br/1404530097661529",
        linkedin: "www.linkedin.com/in/paulo-falco-856772268/",
        email: "paulothfalco@gmail.com"
      },
    ]
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Equipe</Title>
        <Description>
          A equipe do Laboratório de Modelagem Molecular e QSAR é composta pelos coordenadores,
          professores colaboradores e o grupo de pesquisa é constituído por pós-doutorandos,
          alunos de doutorado, mestrado e iniciação científica, todos com suporte financeiro proveniente de instituições como Capes, CNPq e FAPERJ.
        </Description>

        <SectionTitle>Professores</SectionTitle>
        <TeamGrid>
          {teamMembers.professores.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </TeamGrid>

        <SectionTitle>Pós-Doutorado</SectionTitle>
        <TeamGrid isStudent>
          {teamMembers.posdoutorado.map((member) => (
            <StudentCard key={member.id} {...member} />
          ))}
        </TeamGrid>

        <SectionTitle>Doutorado</SectionTitle>
        <TeamGrid isStudent>
          {teamMembers.doutorado.map((member) => (
            <StudentCard key={member.id} {...member} />
          ))}
        </TeamGrid>

        <SectionTitle>Mestrado</SectionTitle>
        <TeamGrid isStudent>
          {teamMembers.mestrado.map((member) => (
            <StudentCard key={member.id} {...member} />
          ))}
        </TeamGrid>

        <SectionTitle>Iniciação Científica</SectionTitle>
        <TeamGrid isStudent>
          {teamMembers.iniciacao.map((member) => (
            <StudentCard key={member.id} {...member} />
          ))}
        </TeamGrid>
      </Container>
      <Footer />
    </>
  );
};

export default People;