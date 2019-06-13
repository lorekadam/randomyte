import styled from 'styled-components/native';
import { heightPtoDPpx } from '../utils';

interface Props {
  height?: number;
  bgc?: string;
  padding?: number;
  alignItems?: string;
  justifyContent?: string;
  radius?: number;
}

export const RoundBlock = styled.TouchableOpacity`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: ${(props: Props) => (props.alignItems ? props.alignItems : 'flex-end')};
  justify-content: ${(props: Props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  border-top-left-radius: ${(props: Props) => (props.radius ? `${props.radius}px` : '40px')};
  border-bottom-right-radius: ${(props: Props) => (props.radius ? `${props.radius}px` : '40px')};
  background-color: ${(props: Props) => (props.bgc ? props.bgc : 'transparent')};
  ${(props: Props) => props.height && `height:${props.height}%`};
  ${(props: Props) => props.padding && `padding:${heightPtoDPpx(props.padding)}`};
`;
