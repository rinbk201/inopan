import styled from "styled-components";
import SkillLabel from "../../atoms/SkillLabel";

const SkillBox = styled.div`
  margin: 0.5rem;
`;

export default function SkillData(props: any) {
  const { index, skill } = props;
  return (
    <SkillBox>
      <SkillLabel index={index} skillName={skill.subject}></SkillLabel>
      <p>{skill.value}</p>
    </SkillBox>
  );
}
