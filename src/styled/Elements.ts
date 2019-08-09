import styled from 'styled-components/native';
import { blue } from './colors';
import { heightPtoDPpx } from '../utils';

interface Props {
  color?: string;
}

export const Group = styled.View`
  padding: ${heightPtoDPpx(1)};
  margin: ${heightPtoDPpx(1)};
  border-width: 1;
  border-color: ${blue};
  ${(props: Props) => props.color && `background-color: ${props.color}`}
`;
