/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { lighten } from 'polished';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  background: transparent;
      button{
        border: none;
        border-radius: 1rem;
        padding: 0.50rem;
        text-transform: uppercase;
        font-weight: 600;
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};
        &:hover{
          background: ${({ theme }) => theme.colors.secondary};
          color: ${({ theme }) => theme.colors.background};
        }
      }

`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a{
    text-transform: uppercase;
    color: ${(props) => props.isActive
    ? props.theme.colors.primary
    : props.theme.colors.textHighLight};
    transition: 0.5s;

    &:hover{
    color: ${(props) =>
    props.isActive
      ? lighten(0.2, props.theme.colors.primary)
      : lighten(0.2, props.theme.colors.textHighLight)
  };
  }
}
`;
