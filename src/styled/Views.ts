import styled from 'styled-components/native';
import { widthPtoDPpx } from '../utils';

interface Props {
  padding?: number;
  bgc?: string;
}

export const FlexView = styled.View`
  display: flex;
  flex: 1;
`;

export const PaddingView = styled.View`
  padding: ${(props: Props) => (props.padding ? widthPtoDPpx(props.padding) : '10px')};
`;

export const BackgroundView = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props: Props) => (props.bgc ? props.bgc : 'transparent')};
`;
