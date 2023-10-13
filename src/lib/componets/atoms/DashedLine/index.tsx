import styled from "styled-components";

const Border = styled.div`
  border-bottom: 2px dashed gainsboro;
  margin: 0.2rem 0;
`;

export default function DashedLine() {
  return <Border></Border>;
}
