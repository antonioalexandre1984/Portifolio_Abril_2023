/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat',sans-serif;
    ::-webkit-scrollbar{
      width: 0.5rem;
      height: 0.312rem;
    }
     ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.colors.primary)};
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: 400 1rem 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  img{
    width: 100%;
    max-width: 100%;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  .container{
    width: 100%;
    max-width: 85rem;
    margin: 0 auto;
    padding: 0 1rem;
    @media(max-width:85rem){
      max-width: 70rem;
    }
    @media(max-width:62.5rem){
      max-width: 50rem;
    }
    @media(max-width:43.75rem){
      padding: 0 2rem;
    }
  }
`;
