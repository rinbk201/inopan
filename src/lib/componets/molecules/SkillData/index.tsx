import styled from "styled-components";
import SkillLabel from "../../atoms/SkillLabel";

const SkillBox = styled.div`
  margin: 0.5rem;
  text-align: center;
`;

const SkillValueText = styled.p`
  font-size: 2rem;
  font-weight: var(--heavy);
  line-height: 1.6rem;
  margin-top: 0.5rem;
`;

interface SkillDataProps {
  skillName: string;
  value: number;
}
export default function SkillData({ skillName, value }: SkillDataProps) {
  return (
    <SkillBox>
      <SkillLabel skillName={skillName}></SkillLabel>
      <SkillValueText>{value}</SkillValueText>
    </SkillBox>
  );
}
