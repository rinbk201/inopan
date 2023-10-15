import styled from "styled-components";
import AfficationIcon from "../../atoms/AffilicationIcon";
import UserIcon from "../../atoms/UserIcon";
import DashedLine from "../../atoms/DashedLine";
import SkillData from "../../molecules/SkillData";
import { useState } from "react";
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
const CheckBox = styled.input`
  display: none;
`;

const StyledHover = `
  &:hover {
    background-color: whitesmoke;
  }
`;

const StyledCard = styled.label`
  width: 100%;
  height: 5rem;
  background-color: white;
  color: black;
  border-left: solid 8px ${(props) => getAffiliationColor(props.affiliationId)};
  line-height: 1.5;
  border-radius: 2px;
  margin: 1rem 0rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  position: relative;
  ${(props) => (props.isChecked ? "" : StyledHover)}
`;

const UserAffiliationbox = styled.div`
  width: 12rem;
  margin: 0 0.5rem;
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

const CheckedIcon = styled.div`
  position: absolute;
  top: -0.7rem;
  right: -0.7rem;
  zindex: 1;
  width: 1.8rem;
  height: 1.8rem;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--bold);
`;

interface abilityCardProps {
  index: number;
  userData: object;
  selectedNum: number;
  onCheckAbilityCard: (index: number) => void;
}
export default function abilityCard({
  index,
  userData,
  selectedNum,
  onCheckAbilityCard,
}: abilityCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedAbilityCard = (index: number) => {
    setIsChecked(!isChecked);
    onCheckAbilityCard(index);
  };

  const checkedLabelStyle = {
    backgroundColor: "#c8e6c9",
  };
  const userId = userData.id;
  const path = "@/img/" + userId + ".jpg";

  return (
    <>
      <CheckBox
        type="checkbox"
        id={"abilityCard_" + index}
        name="abilityCard"
        checked={isChecked}
        onChange={() => handleCheckedAbilityCard(index)}
      />
      <StyledCard
        htmlFor={"abilityCard_" + index}
        affiliationId={userData.affiliation_id}
        isChecked={isChecked}
      >
        <AfficationIcon
          initial={userData.gakka}
          affiliationColor={getAffiliationColor(userData.affiliation_id)}
        ></AfficationIcon>
        <UserIcon iconSize="4rem" iconImg={userData.imgSrc}></UserIcon>
        <UserAffiliationbox>
          <UserNameText>{userData.display_name}</UserNameText>
          <AffiliationText>{userData.gakkaText}</AffiliationText>
          <DashedLine></DashedLine>
        </UserAffiliationbox>
        {Object.keys(userData.skill).map((key) => (
          <SkillData skillName={key} value={userData.skill[key]}></SkillData>
        ))}
        {isChecked && (
          <div
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(80, 80, 80, 0.3)",
              pointerEvents: "none",
            }}
          ></div>
        )}
        {isChecked && <CheckedIcon>{selectedNum + 1}</CheckedIcon>}
      </StyledCard>
    </>
  );
}
