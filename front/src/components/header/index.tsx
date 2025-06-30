import { HeaderContainer, Logo, Nav, NavLink, StyledLink } from './styles';
import LogoHeader from '../../assets/logo2.png';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <HeaderContainer
            as={motion.header}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <StyledLink to="/">
                <Logo
                    as={motion.img}
                    src={LogoHeader}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />
            </StyledLink>
            <Nav
                as={motion.nav}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
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
                        Pesquisa
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
                    <a href="https://enderecodosite.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Database
                    </a>
                </NavLink>
            </Nav>
        </HeaderContainer>
    );
};