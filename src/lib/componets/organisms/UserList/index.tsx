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
    onCheckAbilityCard(createSelectedUserData(tmp));
  };
  // 選択されたユーザのIndexListを元に全員分を足した値を返す
  const createSelectedUserData = (indexList: object) => {
    var template = {
      PLANNING: 0,
      DESIGN: 0,
      FRONTEND: 0,
      BACKEND: 0,
      PRESENTATION: 0,
    };
    indexList.map((index) => {
      Object.keys(template).map((key) => {
        template[key] += list[index].skill[key];
      });
    });
    return template;
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
