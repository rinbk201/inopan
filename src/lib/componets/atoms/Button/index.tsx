import styled from "styled-components";
import { MouseEventHandler } from "react";

const StyledButton = styled.div`
  width: 100%;
  min-height: ${(props) => props.height || "5rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--bold);
  font-size: 1.3rem;
  margin: 0.5rem 0;
`;

const defaultStyle = {
  backgroundColor: "var(--primary)",
  color: "white",
};

const secondStyle = {
  backgroundColor: "white",
  color: "var(--primary)",
  border: "solid 3px var(--primary)",
};

const getButtonStyle = (type: string) => {
  switch (type) {
    case "default":
      return defaultStyle;
    case "second":
      return secondStyle;
    default:
      return "gray";
  }
};

interface ButtonProps {
  type: "default" | "second";
  text: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export default function Button({ type, text, height, onClick }: ButtonProps) {
  const buttonStyle = getButtonStyle(type);
  return (
    <StyledButton onClick={onClick} style={buttonStyle} height={height}>
      {text}
    </StyledButton>
  );
}
