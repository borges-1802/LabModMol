import { Items, NavLink, Text, FooterContainer, FooterText, UpperContainer, GreenText, Container, StyledLink } from './styles';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <FooterContainer
            as={motion.footer}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Items
                as={motion.nav}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/About">
                        Sobre nós
                    </StyledLink>
                </NavLink>
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Research">
                        Pesquisas
                    </StyledLink>
                </NavLink>
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Publication">
                        Publicações
                    </StyledLink>
                </NavLink>
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/People">
                        Equipe
                    </StyledLink>
                </NavLink>
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Life">
                        Life of ModMol
                    </StyledLink>
                </NavLink>
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Services">
                        Serviços
                    </StyledLink>
                </NavLink>
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Contact">
                        Contato
                    </StyledLink>
                </NavLink>
                <NavLink
                    as={motion.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledLink to="/Services">
                        Database
                    </StyledLink>
                </NavLink>
            </Items>

            <Container>
                <Text
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <UpperContainer>
                        <GreenText>Entre em contato:</GreenText>
                        <FooterText>Email: modmolqsar@gmail.com</FooterText>
                        <FooterText>
                            Equipe do Laboratório de Modelagem Molecular & QSAR - ModMolQSAR
                        </FooterText>
                        <FooterText>
                            Faculdade de Farmácia, bloco L subsolo<br />
                            Centro de Ciências da Saúde - CCS<br />
                            Universidade Federal do Rio de Janeiro - UFRJ
                        </FooterText>
                    </UpperContainer>


                </Text>

            </Container>
        </FooterContainer>
    );
}