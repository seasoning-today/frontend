import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkLayout = styled(Link)`
  width: 100%;
  height: 3.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem 1rem 1.5rem;
`;

export const ActionLayout = styled.li`
  width: 100%;
  height: 3.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem 1rem 1.5rem;

  cursor: pointer;
`;
