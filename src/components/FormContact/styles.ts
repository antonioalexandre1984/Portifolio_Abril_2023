import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section``;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
    font-size: 1.2rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    transition: 0.5s;
    width: fit-content;
    &:disabled {
      opacity: 0.5s;
    }
    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.2, theme.colors.primary)}
  }
  @media(max-width: 43.75rem){
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }
  @media(max-width: 28.12rem){
    >button{
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.7rem 1.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 28.12rem) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.7rem 1.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1/3;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 43.75rem) {
    grid-column: 1;
  }
  @media (max-width: 28.12rem) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
