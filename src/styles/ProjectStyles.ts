import { darken } from 'polished';
import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      margin-top: 2rem;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.textLight};
      font-weight: 300;
      text-align: justify;
    }
    button {
      background: ${({ theme }) => theme.colors.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;
      &:hover {
        background: ${({ theme }) => darken(0.05, theme.colors.primary)};
      }
      a {
        color: ${({ theme }) => theme.colors.white};
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
    @media (max-width: 700px) {
      padding: 0 2.5rem;
      p {
        font-size: 1rem;
      }
      button {
        padding: 0.7rem 2rem;
        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;