import styled from "styled-components";
import AfficationIcon from "../../atoms/AffilicationIcon";
import UserIcon from "../../atoms/UserIcon";
import DashedLine from "../../atoms/DashedLine";
import SkillData from "../../molecules/SkillData";
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
  width: 45rem;
  height: 5rem;
  color: black;
  border-left: solid 8px ${(props) => getAffiliationColor(props.affiliationId)};
  line-height: 1.5;
  border-radius: 2px;
  padding: 0.5rem;
  margin: 1rem 0rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: whitesmoke;
  }
`;

const UserAffiliationbox = styled.div`
  width: 12rem;
  margin: 0.3rem;
`;

const UserNameText = styled.h2`
  font-weight: var(--bold);
  font-size: 1rem;
`;

const AffiliationText = styled.h2`
  color: gray;
  font-weight: var(--thin);
  font-size: 0.5rem;
`;

interface abilityCardProps {
  userData: object;
  onAbilityCardClick: (userData: object) => void;
}
export default function abilityCard({
  userData,
  onAbilityCardClick,
}: abilityCardProps) {
  const handleAbilityCardClick = (userData: object) => {
    onAbilityCardClick(userData);
  };

  return (
    <StyledCard
      affiliationId={userData.affiliation_id}
      onClick={() => handleAbilityCardClick(userData)}
    >
      <AfficationIcon
        initial="FI"
        affiliationColor={getAffiliationColor(userData.affiliation_id)}
      ></AfficationIcon>
      <UserIcon></UserIcon>
      <UserAffiliationbox>
        <UserNameText>{userData.display_name}</UserNameText>
        <AffiliationText>未来科学部情報メディア学科</AffiliationText>
        <DashedLine></DashedLine>
      </UserAffiliationbox>
      {Object.keys(userData.skill).map((key) => (
        <SkillData skillName={key} value={userData.skill[key]}></SkillData>
      ))}
    </StyledCard>
  );
}
