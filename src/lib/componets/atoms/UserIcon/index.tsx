import styled from "styled-components";

const Image = styled.div`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  border-radius: 50%;
  border: 2px solid gainsboro;
  background-image: ${(props) => props.iconImg};
`;
interface UserIconProps {
  iconSize: string;
  iconImg: string;
}
export default function UserIcon({ iconSize, iconImg }: UserIconProps) {
  return <Image iconSize={iconSize} iconImg={iconImg}></Image>;
}
