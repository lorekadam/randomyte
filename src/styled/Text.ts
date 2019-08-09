import styled from 'styled-components/native';
import { light } from './colors';
import { heightPtoDPpx } from '../utils';

interface Props {
  color?: string;
  fontSize?: number;
  padding?: number;
  paddingSides?: number;
  textAlign?: string;
}

export const Text = styled.Text`
  ${(props: Props) =>
    props.padding && `padding:${heightPtoDPpx(props.padding)}`};
  color: ${(props: Props) => (props.color ? props.color : light)};
  font-size: ${(props: Props) =>
    props.fontSize ? heightPtoDPpx(props.fontSize) : heightPtoDPpx(1.7)};
  font-family: oswald;
  ${(props: Props) =>
    props.paddingSides && `padding-left:${heightPtoDPpx(props.paddingSides)}`};
  ${(props: Props) =>
    props.paddingSides && `padding-right:${heightPtoDPpx(props.paddingSides)}`};
  ${(props: Props) => props.textAlign && `text-align:${props.textAlign}`};
`;
