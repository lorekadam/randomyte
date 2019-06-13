import styled from 'styled-components/native';

interface Props {
  alignItems?: string;
  justifyContent?: string;
}

export const Aligment = styled.View`
  ${(props: Props) => props.alignItems && `align-items:${props.alignItems}`};
  ${(props: Props) => props.justifyContent && `justify-content:${props.justifyContent}`};
`;

export const Row = styled(Aligment)`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const RowColumn = styled(Aligment)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Col = styled(Aligment)`
  flex: 1;
`;
