`server-only`
import { PostType, SkillLevels } from "@/types"
import { UserRelationPostType } from "@/types"
import { RelationState } from "@/types"
import { PaticipantSelectionType } from "@/types"
import { UserInfoType } from "@/types"
import { getUserInfo } from "./user"
import { SkillType } from "@/types"
import { PaticipantSelectionIncludeTeamInfoType } from "@/types"
import { UserApplicationType } from "@/types"
import { UserRelationStatePutRequestType } from "@/types"

export const getAllRelations = async (post_id: number): Promise<UserRelationPostType[]> => {
  const res = await fetch(`http://localhost:3000/api/post/${post_id}/user-relation`,
		{
			method: 'GET',
			//next: { revalidate: 60 * 30 }
      //next: { revalidate: 10 }
      cache: "no-cache"
		}
	);
  const data = await res.json();
  return data.userRelation;
}

export const getUserSkill = async (user_id: number): Promise<SkillType> => {
  const res = await fetch(`http://localhost:3000/api/user/${user_id}/skill`,
		{
			method: 'GET',
			//next: { revalidate: 60 * 30 }
      //next: { revalidate: 10 }
      cache: "no-cache"
		}
	);
  const data = await res.json();
  return data.skills;
}

export const getPost = async (post_id: number): Promise<PostType> => {
  const res = await fetch(`http://localhost:3000/api/post/${post_id}`,
		{
			method: 'GET',
			//next: { revalidate: 60 * 30 }
      //next: { revalidate: 10 }
      cache: "no-cache"
		}
	);
  const data = await res.json();
  return data.post;
}

export const getAllApplicationUser = async (post_id: number): Promise<PaticipantSelectionIncludeTeamInfoType> => {
  const application_users_APPROVED: PaticipantSelectionType[] = []
  const application_users_UNAPPROVED: PaticipantSelectionType[] = []
  const relations_all = await(getAllRelations(post_id))
  const post = await(getPost(post_id))
  const requirement_number: number = post.recruitmentNumbers
  var PLANNING = 0;
  var PRESENTATION = 0;
  var FRONTEND = 0;
  var BACKEND = 0;
  var DESIGN = 0;
  var OTHER = 0;
  for (var i in relations_all) {
    if (relations_all[i].relationState === RelationState.UNAPPROVED) {
      const user = await (getUserInfo(relations_all[i].userInfoId))
      const user_skill = await (getUserSkill(relations_all[i].userInfoId))
      const paticipants: PaticipantSelectionType= {
        userInfo: user,
        userRelationPost: relations_all[i],
        skills: user_skill
      }
      application_users_UNAPPROVED.push(paticipants)
    }
    if (relations_all[i].relationState === RelationState.APPROVED) {
      const user = await (getUserInfo(relations_all[i].userInfoId))
      const user_skill = await (getUserSkill(relations_all[i].userInfoId))
      PLANNING += user_skill.PLANNING
      PRESENTATION += user_skill.PRESENTATION
      FRONTEND += user_skill.FRONTEND
      BACKEND += user_skill.BACKEND
      DESIGN += user_skill.DESIGN
      OTHER += user_skill.OTHER
      const paticipants: PaticipantSelectionType= {
        userInfo: user,
        userRelationPost: relations_all[i],
        skills: user_skill
      }
      application_users_APPROVED.push(paticipants)
    }
  }
  const allPaticipants: UserApplicationType = {
    APPROVED: application_users_APPROVED,
    UNAPPROVED: application_users_UNAPPROVED
  }
  const teamSkill: SkillType = {
    PLANNING: PLANNING,
    PRESENTATION: PRESENTATION,
    FRONTEND: FRONTEND,
    BACKEND: BACKEND,
    DESIGN: DESIGN,
    OTHER: OTHER
  }

  const paticipants: PaticipantSelectionIncludeTeamInfoType= {
    paticipants: allPaticipants,
    teamSkill: teamSkill,
    RequirementNumber: requirement_number
  }
  //console.log(paticipants)

	return paticipants;
}


export const getBookmarkPostsForMypage = async (user_id: number): Promise<PostType[]> => {
	const res = await fetch(`http://localhost:3000/api/user/${user_id}/post/bookmarked-post`,
		{
			method: 'GET',
			//next: { revalidate: 60 * 30 }
      //next: { revalidate: 10 }
      cache:"no-cache"
		}
	);
	const data = await res.json();
	return data.posts;
}

export const changeRelationState = async (relationData: UserRelationStatePutRequestType[], post_id: number): Promise<SkillType[]> => {
	const datas: SkillType[] = []
  for (var i in relationData) {
    const res = await fetch(`http://localhost:3000/api/post/${post_id}/post/`, {
      method: 'PUT',
      body: JSON.stringify(relationData[i]), // データをJSON文字列に変換
      headers: {
        'Content-Type': 'application/json', // リクエストヘッダーでJSON形式のデータを指定
      },
    });
    const data = await res.json();
    datas.push(data)
  }

	return datas;
}
export const getTeamSkill = async (post_id: number): Promise<SkillType> => {
  const relations_all = await(getAllRelations(post_id))
  var PLANNING = 0;
  var PRESENTATION = 0;
  var FRONTEND = 0;
  var BACKEND = 0;
  var DESIGN = 0;
  var OTHER = 0;
  for (var i in relations_all) {
    console.log(i);
    if (relations_all[i].relationState === RelationState.APPROVED) {
      const user_skill = await (getUserSkill(relations_all[i].userInfoId))
      PLANNING = PLANNING + user_skill.PLANNING
      PRESENTATION += user_skill.PRESENTATION
      FRONTEND += user_skill.FRONTEND
      BACKEND += user_skill.BACKEND
      DESIGN += user_skill.DESIGN
      OTHER += user_skill.OTHER
      
    }
  }
  const teamSkill: SkillType = {
    PLANNING: PLANNING,
    PRESENTATION: PRESENTATION,
    FRONTEND: FRONTEND,
    BACKEND: BACKEND,
    DESIGN: DESIGN,
    OTHER: OTHER
  }
	return teamSkill;
}