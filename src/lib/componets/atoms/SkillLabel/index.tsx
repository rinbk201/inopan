import styled from "styled-components";

const getLabelColor = (skillName: string) => {
  switch (skillName) {
    case "PLANNING":
      return "var(--pink)";
    case "PRESENTATION":
      return "var(--orange)";
    case "FRONTEND":
      return "var(--blue)";
    case "BACKEND":
      return "var(--green)";
    case "DESIGN":
      return "var(--purple)";
    default:
      return "gray";
  }
};
const getSkillInitial = (skillName: string) => {
  switch (skillName) {
    case "PLANNING":
      return "PL";
    case "PRESENTATION":
      return "PR";
    case "FRONTEND":
      return "FE";
    case "BACKEND":
      return "BE";
    case "DESIGN":
      return "DE";
    default:
      return "";
  }
};

const Label = styled.div`
  color: white;
  background-color: ${(props) => getLabelColor(props.skillName)};
  padding: 0.1rem 1rem;
  border-radius: 3px;
`;

const LabelText = styled.p`
  font-size: 0.2rem;
  font-weight: var(--bold);
`;

interface SkillLabelProps {
  skillName: string;
}
export default function SkillLabel({ skillName }: SkillLabelProps) {
  return (
    <Label skillName={skillName}>
      <LabelText>{getSkillInitial(skillName)}</LabelText>
    </Label>
  );
}
