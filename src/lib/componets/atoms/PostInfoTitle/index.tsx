import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: var(--heavy);
  border-bottom: double 5px #212121;
`;

interface PosrInfoTitleProps {
  title: string;
}
export default function PosrInfoTitle({ title }: PosrInfoTitleProps) {
  return <H1>{title}</H1>;
}
