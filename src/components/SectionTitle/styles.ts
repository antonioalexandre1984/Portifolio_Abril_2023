import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 300;
    font-size: 4.5rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 1rem;
  }
  @media (max-width: 62.5rem) {
    > h1 {
      font-size: 2.5rem;
    }
    > h2 {
      font-size: 1.8rem;
    }
    > h3 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 31.25rem) {
    > h1 {
      font-size: 1.8rem;
    }
    > h2 {
      font-size: 1.2rem;
    }
    > h3 {
      font-size: 0.6rem;
    }
  }
`;
