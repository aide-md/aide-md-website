import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  background-color: ${({ variant }) =>
    variant === "secondary" ? "#ccc" : "#00796b"};
  color: ${({ variant }) => (variant === "secondary" ? "#000" : "#fff")};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "secondary" ? "#999" : "#005f56"};
  }
`;

interface ButtonProps {
  onClick(): void;
  variant: "primary" | "secondary";
}

export const Button: React.FCC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};
