//postからのレスポンスの型
export type PostType = {
  id: number;
  userInfoId: number;
  title: string;
  eventType: EventType;
  launchDay: Date;
  deadline: Date;
  recruitmentNumbers: number;
  description: string;
  matchingMessage: string;
  confirmed: boolean;
  createdAt: Date;
  modifiedAt: Date|undefined;
  deletedAt: Date;
};

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
};

export type PostCardType = {
  PostType: PostType;


}

export enum EventType {
  HACKATHON='HACKATHON',
  STUDY='STUDY',
}