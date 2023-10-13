import { type } from "os";

export type PostType = {
  id: number;
  userInfoId: number;
  title: string;
  launchDay: Date;
  deadline: Date;
  recruitmentNumbers: number;
  description: string;
  matchingMessage: string;
  confirmed: boolean;
  createdAt: Date;
  modifiedAt: Date;
  deletedAt: Date;
}

export type NewPostType = {
  userInfoId: number;
  title: string;
  launchDay: Date;
  deadline: Date;
  recruitmentNumbers: number;
  description: string | undefined;
  matchingMessage: string | undefined;
  requirementLanguages: string | undefined;
  modifiedAt: Date;
}

export type EditPostType = {
  title: string;
  launchDay: Date;
  deadline: Date;
  recruitmentNumbers: number;
  matchingMessage: string;
  requirementLanguages: [
    { "language": string, "level": number }
  ]
  modifiedAt: Date;
}

export type NewUserRelationType = {
  UserInfoId: number;
}
export type ChangeUserRelationStateType = {
  userInfoId: Number;
  relationState: string;
}

export type DeleteUserPostRerationType = {
  userInfoId: number;
}

export type 