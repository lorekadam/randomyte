import styled from 'styled-components/native';
import { widthPtoDPpx } from '../utils';

interface Props {
  bgc?: string;
}

export const RoundBlock = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${widthPtoDPpx(2)};
  background-color: ${(props: Props) => (props.bgc ? props.bgc : 'transparent')};
  height: 100%;
`;
