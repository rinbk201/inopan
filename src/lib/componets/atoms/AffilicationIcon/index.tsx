import styled from "styled-components";
const H1 = styled.h1`
  color: ${(props) => props.affiliationColor};
  font-weight: var(--bold);
  font-size: 1.5rem;
`;
export default function AfficationIcon(props: any) {
  const { initial, affiliationColor } = props;
  return (
    <div style={{ minWidth: "3rem" }}>
      <H1 affiliationColor={affiliationColor}>{initial}</H1>
    </div>
  );
}
