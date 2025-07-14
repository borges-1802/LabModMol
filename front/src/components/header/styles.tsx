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
    position: relative;
    min-height: 64px;

    @media (max-width: 1250px) and (min-width: 769px) {
        padding: 0.7rem 1.2rem;
    }
    @media (max-width: 768px) {
        flex-direction: row;
        padding: 0.7rem 0.7rem 0.7rem 1rem;
        min-height: 56px;
    }
`;

export const Logo = styled.img`
    display: flex;
    width: 12rem;
    @media (max-width: 1250px) and (min-width: 769px) {
        width: 9rem;
    }
    @media (max-width: 768px) {
        width: 10rem;
    }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1002;
  padding: 0.5rem;
  @media (max-width: 936px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
  }
`;

export const MobileNav = styled.nav<{ open: boolean }>`
  display: none;
  @media (max-width: 936px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    width: 70vw;
    max-width: 320px;
    height: 100vh;
    background: #0694A1;
    box-shadow: -2px 0 12px rgba(0,0,0,0.15);
    padding-top: 4.5rem;
    gap: 2rem;
    z-index: 1001;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  display: none;
  @media (max-width: 936px) {
    display: ${({ open }) => open ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    z-index: 1000;
  }
`;

// Ajuste para esconder Nav padrão em mobile
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1250px) and (min-width: 937px) {
    gap: 1.2rem;
  }
  @media (max-width: 936px) {
    display: none;
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
    @media (max-width: 1250px) and (min-width: 769px) {
        font-size: 1.1rem;
    }
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;
