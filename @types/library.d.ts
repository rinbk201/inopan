export type PostType = {
    id: number;
    userInfoId: number;
    title: string;
    launchDay: Date;
    deadline:Date;
    recruitmentNumbers:number;
    description:string;
    matchingMessage: string;
    confirmed: boolean;
    createdAt:Date;
    modifiedAt:Date;
    deletedAt:Date;
  }

export type NewPostType = {
    userInfoId:number;
    title:string;
    launchDay:Date;
    deadline:Date;
    recruitmentNumbers:number;
    description:string|undefined;
    matchingMessage:string|undefined;
    requirementLanguages:string|undefined;
    modifiedAt:Date;
}