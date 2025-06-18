import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #0694A1;
  margin: 3rem 0 1.5rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #0694A1;
    margin: 0.5rem auto 0;
  }
`;

export const TeamGrid = styled.div<{ isStudent?: boolean }>`
  display: ${props => props.isStudent ? 'grid' : 'flex'};
  flex-direction: ${props => props.isStudent ? 'initial' : 'column'};
  gap: 2rem;
  flex-wrap: ${props => props.isStudent ? 'initial' : 'nowrap'};
  justify-content: ${props => props.isStudent ? 'initial' : 'flex-start'};
  ${props => props.isStudent && `
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: stretch;
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  `}
`; 