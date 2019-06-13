import styled from 'styled-components/native';
import { heightPtoDPpx } from '../utils';

interface Props {
  padding?: number;
  bgc?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const FlexView = styled.View`
  display: flex;
  flex: 1;
`;

export const PaddingView = styled.View`
  padding: ${(props: Props) => (props.padding ? heightPtoDPpx(props.padding) : heightPtoDPpx(1))};
`;

export const BackgroundView = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props: Props) => (props.bgc ? props.bgc : 'transparent')};
  ${(props: Props) => props.padding && `padding:${heightPtoDPpx(props.padding)}`};
`;

export const AbsoluteView = styled.View`
  position: absolute;
  ${(props: Props) => props.top && `top:${heightPtoDPpx(props.top)}`};
  ${(props: Props) => props.right && `right:${heightPtoDPpx(props.right)}`};
  ${(props: Props) => props.bottom && `bottom:${heightPtoDPpx(props.bottom)}`};
  ${(props: Props) => props.left && `left:${heightPtoDPpx(props.left)}`};
`;
