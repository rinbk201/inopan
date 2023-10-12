"use client";
import AbilityCard from "../AbilityCard/index";

interface userListProps {
  list: object;
  onAbilityCardClick: (userData: object) => void;
}
export default function userList({ list, onAbilityCardClick }: userListProps) {
  return (
    <>
      {list.map((item: any, index: number) => (
        <AbilityCard
          key={index}
          userData={item}
          onAbilityCardClick={onAbilityCardClick}
        ></AbilityCard>
      ))}
    </>
  );
}
