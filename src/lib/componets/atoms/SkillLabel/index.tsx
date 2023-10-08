import styled from "styled-components";
const getLabelColor = (index: number) => {
  switch (index) {
    case 0:
      return "var(--pink)";
    case 1:
      return "var(--orange)";
    case 2:
      return "var(--blue)";
    case 3:
      return "var(--green)";
    case 4:
      return "var(--purple)";
    default:
      return "gray";
  }
};
const getSkillInitial = (index: number) => {
  switch (index) {
    case 0:
      return "PL";
    case 1:
      return "PR";
    case 2:
      return "FE";
    case 3:
      return "BE";
    case 4:
      return "DE";
    default:
      return "";
  }
};
const Label = styled.div`
  color: white;
  background-color: ${(props) => getLabelColor(props.index)};
`;

const LabelText = styled.p`
  font-size: 0.2rem;
`;

export default function SkillLabel(props: any) {
  const { index, skillName } = props;
  return (
    <Label index={index}>
      <LabelText>{getSkillInitial(index)}</LabelText>
    </Label>
  );
}
