import React from 'react';
import { Container, Title, Description, TeamGrid, SectionTitle } from './styles';
import TeamMemberCard from '../../components/team/TeamMemberCard';
import StudentCard from '../../components/studentCard';
import Header from '../../components/header';
import Footer from '../../components/footer';
import alessandra from '../../assets/alessandra2.png';

const People: React.FC = () => {
  const teamMembers = {
    professores: [
      {
        id: 1,
        name: "Carlos Rangel Rodrigues",
        role: "Coordenador",
        photo: "/path-to-photo.jpg",
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
      }
    ],
    doutorado: [
      {
        id: 3,
        name: "Nome do Doutorando 1",
        role: "Doutorando",
        photo: "/path-to-photo.jpg",
        description: "Doutorando em Química com foco em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 4,
        name: "Nome do Doutorando 2",
        role: "Doutorando",
        photo: "/path-to-photo.jpg",
        description: "Doutorando em Química com foco em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 5,
        name: "Nome do Doutorando 3",
        role: "Doutorando",
        photo: "/path-to-photo.jpg",
        description: "Doutorando em Química com foco em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      }
    ],
    mestrado: [
      {
        id: 6,
        name: "Nome do Mestrando 1",
        role: "Mestrando",
        photo: "/path-to-photo.jpg",
        description: "Mestrando em Química com foco em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 7,
        name: "Nome do Mestrando 2",
        role: "Mestrando",
        photo: "/path-to-photo.jpg",
        description: "Mestrando em Química com foco em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 8,
        name: "Nome do Mestrando 3",
        role: "Mestrando",
        photo: "/path-to-photo.jpg",
        description: "Mestrando em Química com foco em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      }
    ],
    iniciacao: [
      {
        id: 9,
        name: "Nome do Aluno 1",
        role: "Aluno de Iniciação Científica",
        photo: "/path-to-photo.jpg",
        description: "Aluno de Iniciação Científica com interesse em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 10,
        name: "Nome do Aluno 2",
        role: "Aluno de Iniciação Científica",
        photo: "/path-to-photo.jpg",
        description: "Aluno de Iniciação Científica com interesse em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      },
      {
        id: 11,
        name: "Nome do Aluno 3",
        role: "Aluno de Iniciação Científica",
        photo: "/path-to-photo.jpg",
        description: "Aluno de Iniciação Científica com interesse em modelagem molecular e desenvolvimento de fármacos.",
        lattes: "https://lattes.cnpq.br/",
        linkedin: "https://linkedin.com/in/",
        email: "email@example.com"
      }
    ]
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Equipe</Title>
        <Description>
          Nossa equipe é composta por pesquisadores dedicados e profissionais qualificados, 
          trabalhando em conjunto para avançar o conhecimento em modelagem molecular e 
          desenvolvimento de fármacos. Conheça nossos membros e suas áreas de especialização.
        </Description>

        <SectionTitle>Professores</SectionTitle>
        <TeamGrid>
          {teamMembers.professores.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
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