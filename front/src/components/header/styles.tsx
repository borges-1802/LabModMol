import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const HeaderContainer = styled.header`
    font-family: 'Lato';
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #0694A1;
    box-shadow: 0 2px 4px rgba(37, 37, 37, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`;

export const Logo = styled.img`
    display: flex;
    width: 12rem;

    @media (max-width: 768px) {
        width: 10rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const NavLink = styled(motion.a)`
    text-decoration: none;
    color: #F3F3F3;
    font-weight: 500;
    font-size: 1.3rem;

    &:hover {
        color:#000000;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;
