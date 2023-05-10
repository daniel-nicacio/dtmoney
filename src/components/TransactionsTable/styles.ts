import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      color: var(--text-body);
      line-height: 1.5rem;
      text-align: left;

      padding: 1rem 2rem;
    }

    td {
      background: var(--shape);
      color: var(--text-body);

      border: 0;
      border-radius: 0.25rem;
      padding: 1rem 2rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
