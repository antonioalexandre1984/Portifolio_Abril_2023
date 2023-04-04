import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  padding-bottom: 8rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

  > img {
    width: 40rem;
    height: 100%;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 90rem) {
    > img {
      width: 30rem;
    }
    > div {
      flex: 1;
    }
  }

  @media (max-width: 62.5rem) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 43.75rem) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: 90rem) {
    > h1 {
      font-size: 5rem;
    }
    > h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 62.5rem) {
    > h1 {
      font-size: 3rem;
    }
    > h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: 2rem;
  font-family: 'jetBrains mono', monospace;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  width: 24rem;
  align-self: center;
  transition: 1s !important;

  @media (max-width: 90rem) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 62rem) {
    width: 100%;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:first-child {
    align-self: flex-start;
  }
  &:last-child {
    align-self: flex-end;
  }
  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  span.purple {
    color: ${({ theme }) => theme.colors.purple};
  }
  span.blue {
    color: ${({ theme }) => theme.colors.blue};
  }
  span.comment {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
