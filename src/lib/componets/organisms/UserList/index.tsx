"use client";
import AbilityCard from "../AbilityCard/index";

export default function userList(props: any) {
  const { list } = props;
  return (
    <>
      {list.map((item: any, index: number) => (
        <AbilityCard key={index} userData={item}></AbilityCard>
      ))}
    </>
  );
}
