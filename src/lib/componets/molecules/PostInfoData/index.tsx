import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.3rem;
  font-weight: var(--bold);
`;
interface PostInfoDataProps {
  title: string;
  data: string;
}
export default function PostInfoData({ title, data }: PostInfoDataProps) {
  return (
    <div style={{ margin: "1.5rem 0" }}>
      <H1>{title}</H1>
      <p style={{ marginTop: "0.3rem" }}>{data}</p>
    </div>
  );
}
