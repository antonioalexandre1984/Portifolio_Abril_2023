/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { darken } from 'polished';
import styled from 'styled-components';

interface InputStyleContainerProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError: boolean;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Container = styled.section``;

export const Input = styled.input<InputStyleContainerProps>`
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

  border-color: ${({ hasError, theme }) => hasError
    ? theme.colors.error
    : theme.colors.border
  };

    &::placeholder {
      color: ${({ hasError, theme }) => hasError
    ? theme.colors.error
    : theme.colors.primary
  };
    }

  + span {
    display: ${({ hasError }) => (hasError ? 'block' : 'none')};
    color: ${({ hasError, theme }) =>
    hasError ? theme.colors.error : theme.colors.primary};
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: ${({ hasError }) => (hasError ? '0.5rem' : 0)};
    border-radius: 0.5rem;
    padding: 0.5rem;

  }

   &:not(:disabled):not([readonly]):focus + span {
    display: block;
    margin-top: 0.5rem;
  }

 &::placeholder {
    color: ${({ hasError, theme }) =>
    hasError ? theme.colors.error : theme.colors.primary};
  }
  &:focus {
    border: 1px solid ${({ hasError, theme }) =>
    hasError ? theme.colors.error : theme.colors.primary};
  }
  @media (max-width: 28.12rem) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.25rem;

   @media (max-width: 700px) {
    > * {
      width: 100%;
    }
  }
`;

export const TextArea = styled.textarea<TextAreaProps>`
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

  border-color: ${({ hasError, theme }) => hasError
    ? theme.colors.error
    : theme.colors.border
  };

  &::placeholder {
    color: ${({ hasError, theme }) => hasError
    ? theme.colors.errorBackground
    : theme.colors.primary
  };

  }

   + span {
    display: ${({ hasError }) => (hasError ? 'block' : 'none')};
   color: ${({ hasError, theme }) =>
    hasError ? theme.colors.error : theme.colors.primary};
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: ${({ hasError }) => (hasError ? '0.5rem' : 0)};
    border-radius: 0.5rem;
    padding: 0.5rem;

  }

  &::placeholder {
    color: ${({ hasError, theme }) =>
    hasError ? theme.colors.error : theme.colors.primary};
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

export const FormContainer = styled.form`
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
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
    grid-row: 4;
    width: fit-content;
    &:disabled {
      opacity: 0.5s;
    }
  &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.2, theme.colors.primary)};
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: 450px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;
