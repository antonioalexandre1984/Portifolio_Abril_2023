import styled from 'styled-components';

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-bottom: 8rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media (max-width: 62.5rem) {
      gap: 2rem;
    }
  }
  > button {
    background: ${({ theme }) => theme.colors.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
    a {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.gradient};
      font-weight: 500;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 31.25rem) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }
      >div.overlay{
        opacity: 0.4;
      }
    }
     >button a{
    color:${({ theme }) => theme.colors.primary}
    }
  }
    >button{
      height: 4rem;
      margin: 0 0 3rem 5rem;
      background: none;
      border: none;

      a{
        color: ${({ theme }) => theme.colors.white};
        font-size: 2rem;
        font-weight: 300;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        transition: 0.5s;
      }
    }

  >section{
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl})no-repeat center;
    background-size: cover;
    position: relative;

    >div.overlay{
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.gradient};
      opacity: 0.75;
      transition: 0.5s;
    }

      >div.text{
        position: absolute;
        top: 3rem;
        right: -10rem;
        transition: 0.5s;
        width: fit-content;

      h1{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172B;
      }
      h2{
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172B;
      }
    }
  }

  &:nth-child(even){
    flex-direction: row-reverse;

    >button{
      margin: 3rem 5rem 0 0;
    }
    >section >div.text{
      right: 0;
      left: -10rem;
      text-align: right:
    }
    &:hover{
      >section >div.text{
        left: -12rem;
      }
    }
  }

  @media (max-width: 90rem) {
    > section{
      width: 40rem;
    }
  }
  @media (max-width: 62.5rem) {
    > section{
      width: 100%;
      >div.text{
        top: 1rem;
        left: 1rem;
      }
    }
    >button{
      margin: 0;
      right: 1rem;
      bottom: 1rem;
      position: absolute;
    }
    &:nth-child(even){
      flex-direction: row;
      >section{
        width: 100%;
        >div.text{
          left; 1rem;
          top: 1rem;
          text-align: left;
        }
      }
      >button{
        right: 1rem;
        right: 1rem;
        margin: 0;
        position: absolute;
      }
      &:hover{
        >section >div.text{
          left: 1rem;
        }
      }
    }
  }
  @media (max-width: 43.75rem) {
    height: 17rem;
  }
  @media (max-width: 31.25rem) {
    >button{
      height: auto;
      a{
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }
    >section > div.text{
      h1{
        font-size: 1.5rem;
      }
    }
  }
`;
