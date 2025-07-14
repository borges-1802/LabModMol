import { HeaderContainer, Logo, Nav, NavLink, StyledLink, HamburgerButton, MobileNav, Overlay } from './styles';
import LogoHeader from '../../assets/logo2.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClose = () => setMenuOpen(false);
    const navLinks = [
        { to: '/About', label: 'Sobre nós' },
        { to: '/Research', label: 'Pesquisa' },
        { to: '/Publication', label: 'Publicações' },
        { to: '/People', label: 'Equipe' },
        { to: '/Life', label: 'Life of ModMol' },
        { to: '/Services', label: 'Serviços' },
        { to: '/Contact', label: 'Contato' },
        { to: '/Services', label: 'Database' },
    ];
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
            <HamburgerButton aria-label="Abrir menu" onClick={() => setMenuOpen(o => !o)}>
                {menuOpen ? <FaTimes size={28} color="#fff" /> : <FaBars size={28} color="#fff" />}
            </HamburgerButton>
            <Nav
                as={motion.nav}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {navLinks.map(link => (
                    <NavLink
                        as={motion.a}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={link.to + '-desktop'}
                    >
                        <StyledLink to={link.to}>{link.label}</StyledLink>
                    </NavLink>
                ))}
            </Nav>
            <Overlay open={menuOpen} onClick={handleClose} />
            <MobileNav open={menuOpen}>
                {navLinks.map(link => (
                    <NavLink
                        as={motion.a}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={link.to + '-mobile'}
                        onClick={handleClose}
                    >
                        <StyledLink to={link.to}>{link.label}</StyledLink>
                    </NavLink>
                ))}
            </MobileNav>
        </HeaderContainer>
    );
};