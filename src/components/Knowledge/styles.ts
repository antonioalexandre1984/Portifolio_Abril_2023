import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

  > section {
    width: 100%;
    max-width: 90rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem;
    margin: 0 auto;
    margin-bottom: 6rem;
    margin-top: 2rem;

    @media (max-width: 62.5rem) {
      grid-template-columns: repeat(2, 2fr);
      grid-gap: 5rem;
    }

    @media (max-width: 43.75rem) {
      grid-template-columns: repeat(2, 2fr);
      grid-gap: 3rem;
      margin-top: 5rem;
    }
  }
`;

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  max-width: 20rem;

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  svg {
    width: 5rem;
    height: 5rem;
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.primary};
      transform: scale(0.95);
    }
  }

  @media (max-width: 62.5rem) {
    p {
      font-size: 1rem;
    }
    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;
