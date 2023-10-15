interface SelectMemberPageSkillProps {
  skillName: string;
  skillValue: string;
}
export default function SelectMemberPageSkill({
  skillName,
  skillValue,
}: SelectMemberPageSkillProps) {
  return (
    <div style={{ display: "flex" }}>
      <p style={{ color: "var(--primary)" }}>{skillName}</p>
      <p>{skillValue}</p>
    </div>
  );
}
