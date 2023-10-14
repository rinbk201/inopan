"use client";
import AbilityCard from "../AbilityCard/index";
import { useState } from "react";

interface userListProps {
  list: object;
  onCheckAbilityCard: (userData: object) => void;
}
export default function userList({ list, onCheckAbilityCard }: userListProps) {
  // チェックボックスを選択されたユーザのIndexを保持する
  const [selectedUserIndexList, setSelectedUserIndexList] = useState([]);
  const handleCheckedAbilityCard = (index: number) => {
    var tmp: any = [];
    if (selectedUserIndexList.includes(index)) {
      tmp = selectedUserIndexList.filter((item) => item !== index);
      setSelectedUserIndexList(tmp);
    } else {
      tmp = [...selectedUserIndexList, index];
      setSelectedUserIndexList(tmp);
    }
    onCheckAbilityCard(tmp);
  };

  return (
    <>
      {list.map((item: any, index: number) => (
        <AbilityCard
          index={index}
          userData={item}
          selectedNum={
            selectedUserIndexList.includes(index)
              ? selectedUserIndexList.indexOf(index)
              : null
          }
          onCheckAbilityCard={handleCheckedAbilityCard}
        ></AbilityCard>
      ))}
    </>
  );
}
