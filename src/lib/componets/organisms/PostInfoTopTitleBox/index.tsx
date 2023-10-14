import styled from "styled-components";

const PostTitleBox = styled.div`
  margin-bottom: 5rem;
`;

const PostType = styled.p`
  font-size: 1rem;
  font-weight: var(--bold);
  color: var(--pink);
  text-align: center;
  margin-bottom: 1.5rem;
`;

const PostTitle = styled.p`
  font-size: 1.5rem;
  font-weight: var(--bold);
  text-align: center;
`;

interface PostInfoTitleProps {
  type: string;
  title: string;
}
export default function PostInfoTitle({ type, title }: PostInfoTitleProps) {
  return (
    <PostTitleBox>
      <PostType>{type}</PostType>
      <PostTitle>{title}</PostTitle>
    </PostTitleBox>
  );
}
