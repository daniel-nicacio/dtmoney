import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    color: var(--text-title);

    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;

    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    padding: 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;

    background: var(--green);

    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    border: 0;
    border-radius: 0.25rem;
    margin-top: 1.25rem;
    padding: 0 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e40",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(
      0.1,
      "#d7d7d7"
    )};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;

    font-size: 1rem;
    color: var(--text-title);

    margin-left: 1rem;
  }
`;
