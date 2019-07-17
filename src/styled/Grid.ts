import styled from 'styled-components/native';

interface Props {
  alignItems?: string;
  justifyContent?: string;
  flex?: number;
}

export const Aligment = styled.View`
  ${(props: Props) => props.alignItems && `align-items:${props.alignItems}`};
  ${(props: Props) => props.justifyContent && `justify-content:${props.justifyContent}`};
  ${(props: Props) => props.flex && `flex:${props.flex}`};
`;

export const Row = styled(Aligment)`
  display: flex;
  flex-direction: row;
`;

export const RowColumn = styled(Aligment)`
  display: flex;
  flex-direction: column;
`;

export const Col = styled(Aligment)`
  ${(props: Props) => (props.flex ? `flex:${props.flex}` : 'flex:1')};
`;
