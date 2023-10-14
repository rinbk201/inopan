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

export type EditPostRequestType = {
	title: string;
	launchDay: Date;
	deadline: Date;
	recruitmentNumbers: number;
	matchingMessage: string | undefined;
	requirementLanguages: LanguageType[]| undefined;
	modifiedAt: Date | undefined;
}

//ユーザー
export type UserRelationPostRequestType = {
	userInfoId: number;
}

export type UserRelationType = {
	userReration: 
		{
			id: number;
			userInfoId: number;
			applicationLevel: string;
      relationState: RelationState;
		}[]
	| undefined
}

export type UserRelationStatePutRequestType = {
	userInfoId: Number;
	relationState: RelationState;
}

export type DeleteUserPostRerationType = {
	userInfoId: number;
}

export type UserInfoType = {
	id: number;
	userId: number;
	email: string;
	displayName: string;
	affiliationId: number;
	lab: string | undefined;
	gender: Gender;
	hobby: string | undefined;
	comment: string | undefined;
	discordId: string | undefined;
	xId: string | undefined;
	facebookId: string | undefined;
	freeForm: string | undefined;
	createdAt: Date;
	deletedAt: Date | null
}

export type EditUserInfoRequestType = {
	email: string;
	displayName: string;
	affiliationId: number;
	lab: string | undefined;
	gender: Gender;
	hobby: string | undefined;
	comment: string | undefined;
	discordId: string | undefined;
	xId: string | undefined;
	facebookId: string | undefined;
	freeForm: string | undefined;
}


export type ApplicationPostType = {
	posts: PostType[];
}

export type ApprovedPostType = {
	posts: PostType[];
}

export type AutherPostType = {
	posts: PostType[];
}

export type BookmarkedPostType = {
	posts: PostType[]
}

export type ConfirmedPostType = {
	posts: PostType[]
}

export type UserRelatedPostType = {
	posts:[
		{
			APPROVED: PostType[];
		},
		{
			UNAPPROVED: PostType[];
		},
		{
			CONFIRMED: PostType[];
		},
		{
			BOOKMARK: PostType[];
		}
	]
}


export type NewApplicationPostRequestType = {
	postId: number;
	applicationLevel: ApplicationLevel;
}

export type DeleteApplicationPostType = {
	postId: number;
}

export type NewBookmarkedPostType = {
	postId: number;
}

export type DeleteBookmarkedPostType = {
	postId: number;
}

export type LanguageType = {
	language: 
		{
			languageName: string;
			level: number;
		}[]
}

export type SkillType = {
	skills: {
		PLANNING: number;
		PRESENTATION: number,
		FRONTEND: number;
		BACKEND: number;
		DESIGN: number;
		OTHER: number;
	}
}

export type EditSkillType = {
	skills: {
		PLANNING: number;
		PRESENTATION: number,
		FRONTEND: number;
		BACKEND: number;
		DESIGN: number;
		OTHER: number;
	}
}


enum Gender {
  MAN,
  WOMAN,
  OTHER
}

// 付与される権限
enum Role {
  ADMIN,
  ROLE
}

//リアクションの強さ
enum ReactionLevel {
  LEVEL1=1,
  LEVEL2=2,
  LEVEL3=3,
  LEVEL4=4
}

//興味の強さ
enum InterestLevel {
  LEVEL1=1,
  LEVEL2=2,
  LEVEL3=3
}

enum ApplicationLevel {
  BOOKMARK,
  CASUALLY_JOIN,
  NORMAL_JOIN,
  SERIOUSLY_JOIN
}

enum RelationState {
  UNAPPROVED,
  APPROVED
}

//学部学科略称のリスト
enum AffrilationInitial {
  // 工学部
  EJ, //電気電子工学科
  EH, //電子システム工学科
  ES, //応用化学科
  EK, //機械工学科
  EF, //先端機械工学科
  EC, //情報通信工学科

  // 工学部第二部
  NE, //電気電子工学科
  NM, //機械工学科
  NC, //情報通信工学科

  // 未来科学部
  FA, //建築学科
  FI, //情報メディア学科
  FR, //ロボット・メカトロニクス学科

  // システムデザイン工学部
  AJ, //情報システム工学科
  AD, //デザイン工学科

  // 情報環境学部
  JK, //情報環境学科

  // 理工学部理工学科
  RU, //理学系
  RB, //生命科学系
  RD, //情報システムデザイン学系
  RM, //機械工学系
  RE, //電子工学系
  RG, //建築・都市環境学系
  RL //共通教育群
}

//ユーザーの保有スキルのフィールド
enum SkillFields {
  PLANNING,
  DESIGN,
  FRONTEND,
  BACKEND,
  PRESENTATION,
  OTHER
}

//保有スキル・取得言語のレベル・興味の度合い
enum SkillLevels {
  LEVEL1=1,
  LEVEL2=2,
  LEVEL3=3,
  LEVEL4=4,
  LEVEL5=5
}

//プログラミング言語
enum ProgrammingLanguageEnum {
  C_Cpp, // C/C++
  Csharp, // C#
  Java,
  Python,
  JavaScript,
  OTHER
}

//業界
enum Industorys {
  WEB,
  GAME,
  SI,
  CHEMISTRY,
  ADVERTISEMENT,
  OTHER
}


export enum EventType {
  HACKATHON='HACKATHON',
  STUDY='STUDY',
}