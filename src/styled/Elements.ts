import styled from 'styled-components/native';
import { blue } from './colors';
import { heightPtoDPpx } from '../utils';

export const Group = styled.View`
  padding: ${heightPtoDPpx(1)};
  margin: ${heightPtoDPpx(1)};
  border-width: 1;
  border-color: ${blue};
`;
