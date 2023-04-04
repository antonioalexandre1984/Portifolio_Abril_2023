import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8rem;
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.2rem;
      font-weight: 500;
      transition: 0.5s;
      text-transform: uppercase;
    }
    > section {
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.colors.text};
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    @media (max-width: 28.12rem) {
      button {
        font-size: 0.9rem;
      }

      > section {
        gap: 0.5rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
