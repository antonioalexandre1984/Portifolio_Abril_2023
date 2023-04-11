/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { lighten } from 'polished';

interface NavLinkProps {
  isActive: boolean;
}

interface ButtonContainerProps {
  isDark: boolean;
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

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  button {
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    background: ${(props) => props.isDark ? props.theme.colors.primary : 'transparent'};
    color: ${(props) => props.isDark ? props.theme.colors.background : props.theme.colors.textHighLight};
    transition: 0.5s;

    &:hover {
      background: ${(props) => props.isDark ? props.theme.colors.primary : 'transparent'};
      color: ${(props) => props.isDark ? props.theme.colors.background : lighten(0.2, props.theme.colors.textHighLight)};
    }

    &.active {
      background: ${(props) => props.isDark ? props.theme.colors.primary : props.theme.colors.primary};
      color: ${(props) => props.isDark ? props.theme.colors.background : props.theme.colors.background};
    }

    &.inactive {
      background: ${(props) => props.isDark ? 'transparent' : 'transparent'};
      color: ${(props) => props.isDark ? props.theme.colors.textHighLight : props.theme.colors.textHighLight};
    }
  }

  .active {
    &.pt {
      background: ${(props) => props.isDark ? props.theme.colors.primary : props.theme.colors.primary};
      color: ${(props) => props.isDark ? props.theme.colors.background : props.theme.colors.background};
    }

    &.en {
      background: ${(props) => props.isDark ? props.theme.colors.primary : props.theme.colors.primary};
      color: ${(props) => props.isDark ? props.theme.colors.background : props.theme.colors.background};
    }
  }

  .inactive {
    &.pt {
      background: ${(props) => props.isDark ? 'transparent' : 'transparent'};
      color: ${(props) => props.isDark ? props.theme.colors.textHighLight : props.theme.colors.textHighLight};
    }

    &.en {
      background: ${(props) => props.isDark ? 'transparent' : 'transparent'};
      color: ${(props) => props.isDark ? props.theme.colors.textHighLight : props.theme.colors.textHighLight};
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
