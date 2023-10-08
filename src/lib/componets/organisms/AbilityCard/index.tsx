import styled from "styled-components";
const getAffiliationColor = (affiliation_id: number) => {
  switch (affiliation_id) {
    case 1:
      return "var(--pink)";
    case 2:
      return "var(--orange)";
    case 3:
      return "var(--blue)";
    case 4:
      return "var(--green)";
    default:
      return "gray";
  }
};
const StyledCard = styled.div`
  color: black;
  border-left: solid 8px ${(props) => getAffiliationColor(props.affiliationId)};
  background: whitesmoke;
  line-height: 1.5;
  border-radius: 2px;
  padding: 0.5em;
`;
export default function abilityCard(props: any) {
  const { userData } = props;
  console.log(userData.affiliation_id);
  return (
    <StyledCard affiliationId={userData.affiliation_id}>
      {userData.display_name}
    </StyledCard>
  );
}
