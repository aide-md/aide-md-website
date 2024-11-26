import React from "react";
import styled from "styled-components";

type ButtonVariants = "primary" | "secondary";

type ButtonSizes = "normal" | "xl";

const StyledButton = styled.button<{
  variant: ButtonVariants;
  size: ButtonSizes;
}>`
  background-color: ${({ variant }) =>
    variant === "secondary" ? "#ccc" : "#00796b"};
  color: ${({ variant }) => (variant === "secondary" ? "#000" : "#fff")};
  padding: ${({ size }) => (size === "normal" ? "10px 20px" : "15px 30px")};
  border: none;
  border-radius: 5px;
  font-size: ${({ size }) => (size === "normal" ? "1rem" : "1.5rem")};
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "secondary" ? "#999" : "#005f56"};
  }
`;

interface ButtonProps {
  onClick(): void;
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export const Button: React.FCC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "normal",
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};
