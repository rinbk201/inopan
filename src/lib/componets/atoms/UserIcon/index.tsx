import styled from "styled-components";

const Image = styled.div`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  border-radius: 50%;
  border: 2px solid gainsboro;
  background-image: url(${(props) => props.iconImg});
  background-repeat: no-repeat; /*背景画像の繰り返しを解除*/
  background-size: ${(props) => props.iconSize}; /*背景画像のサイズ指定*/
`;
interface UserIconProps {
  iconSize: string;
  iconImg: string;
}
export default function UserIcon({ iconSize, iconImg }: UserIconProps) {
  return <Image iconSize={iconSize} iconImg={iconImg}></Image>;
}
